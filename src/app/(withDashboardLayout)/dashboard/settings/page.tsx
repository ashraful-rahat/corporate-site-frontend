/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import { toast } from "react-hot-toast";
import { Edit3, Save, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
  useUploadLogoMutation,
} from "@/redux/api/settingsApi";
import Input from "@/components/form/Input";
import FileUpload from "@/components/form/FileUpload";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Select from "@/components/form/Select";
import { ISettings } from "@/types/settings";

const AVAILABLE_ROUTES = [
  { url: "/services", defaultTitle: "Services" },
  { url: "/solutions", defaultTitle: "Solutions" },
  { url: "/projects", defaultTitle: "Projects" },
  { url: "/team", defaultTitle: "Team" },
  { url: "/odoo", defaultTitle: "Odoo" },
  { url: "/career", defaultTitle: "Career" },
  { url: "/about", defaultTitle: "About" },
  { url: "/blog", defaultTitle: "Blog" },
  { url: "/contact", defaultTitle: "Contact" },
  // Add more as needed
];

export default function SettingsPage() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [navLogo, setNavLogo] = useState<File[]>([]);
  const [footerLogo, setFooterLogo] = useState<File[]>([]);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    data: settingsData,
    isLoading: isFetching,
    error,
    refetch,
  } = useGetSettingsQuery();
  const data = settingsData?.data;

  const [updateSettings, { isLoading: isUpdating }] =
    useUpdateSettingsMutation();
  const [uploadLogo] = useUploadLogoMutation();

  const getDefaultNavigation = (data: any) => {
    // Merge available routes with current settings
    const currentNav = data?.navigation || [];
    return AVAILABLE_ROUTES.map((route) => {
      const found = currentNav.find((item: any) => item.url === route.url);
      return found
        ? { ...found, enabled: !!found.enabled }
        : { title: route.defaultTitle, url: route.url, enabled: false };
    });
  };

  const form = useForm<ISettings>({
    // resolver: zodResolver(settingsSchema),
    defaultValues: {
      ...data,
      navigation: getDefaultNavigation(data),
    },
    values: data
      ? {
          ...data,
          navigation: getDefaultNavigation(data),
        }
      : undefined,
  });

  const locationsFields = useFieldArray({
    control: form.control,
    name: "footer.locations",
  });
  const productLinksFields = useFieldArray({
    control: form.control,
    name: "footer.productLinks",
  });
  const socialIconsFields = useFieldArray({
    control: form.control,
    name: "footer.socialIcons",
  });

  // Handle logo upload
  const handleLogoUpload = async (files: File[], type: "nav" | "footer") => {
    if (!files.length) return;
    try {
      setIsLoading(true);
      await uploadLogo({ file: files[0], type }).unwrap();
      toast.success(
        `${type === "nav" ? "Navigation" : "Footer"} logo uploaded!`
      );
      refetch();
    } catch {
      toast.error("Failed to upload logo");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: ISettings) => {
    setIsLoading(true);
    setFormError(null);
    try {
      await updateSettings(values).unwrap();
      toast.success("Settings updated successfully!");
      setOpen(false);
      refetch();
      form.reset(values);
    } catch (err: any) {
      setFormError(err?.data?.message || "Failed to update settings");
      // Scroll to first error if any
      setTimeout(() => {
        const errorField = document.querySelector(
          ".border-destructive, .border-red-500"
        );
        if (errorField) {
          (errorField as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
      toast.error("Failed to update settings");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" mx-auto  space-y-6 ">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-3xl font-bold">Platform Settings</h1>
          <p className="text-muted-foreground">
            Manage your platform configuration
          </p>
        </div>
        <Button className="gap-2" onClick={() => setOpen(true)}>
          <Edit3 className="h-4 w-4" />
          Edit Settings
        </Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Edit Settings"
        >
          <div className="bg-gray-50 rounded-xl p-2 sm:p-4">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 relative"
            >
              {formError && (
                <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4 animate-pulse">
                  {formError}
                </div>
              )}
              {/* Navigation Items */}
              <div>
                <div className="flex items-center justify-between mb-4 ">
                  <label className="font-medium">Navigation Items</label>
                </div>
                <div className="space-y-3">
                  {form.watch("navigation")?.map((navItem, index) => (
                    <div key={navItem.url} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        checked={navItem.enabled}
                        onChange={() => {
                          const navigation = [
                            ...(form.getValues("navigation") || []),
                          ];
                          navigation[index].enabled =
                            !navigation[index].enabled;
                          form.setValue("navigation", navigation);
                        }}
                        className="accent-primary"
                      />
                      <Input
                        placeholder="Title"
                        value={navItem.title}
                        onChange={(e) => {
                          const navigation = [
                            ...(form.getValues("navigation") || []),
                          ];
                          navigation[index].title = e.target.value;
                          form.setValue("navigation", navigation);
                        }}
                        error={
                          form.formState.errors.navigation?.[index]?.title
                            ?.message
                        }
                        className="flex-1"
                      />
                      <Input
                        placeholder={navItem.url}
                        value={navItem.url}
                        disabled
                        className="flex-1"
                      />
                      {navItem.enabled && (
                        <span className="text-green-600">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 10l4 4 6-8" />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="my-4" />
              {/* Nav Logo Upload */}
              <FileUpload
                label="Navigation Logo"
                value={navLogo}
                onChange={(files) => {
                  setNavLogo(files);
                  handleLogoUpload(files, "nav");
                }}
                maxFiles={1}
              />
              <Separator className="my-4" />
              {/* Hero Section */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Hero Title"
                  {...form.register("hero.title")}
                  error={form.formState.errors.hero?.title?.message}
                />
                <Input
                  label="Hero Subtitle"
                  {...form.register("hero.subtitle")}
                  error={form.formState.errors.hero?.subtitle?.message}
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Hero Words</label>
                  <Button
                    type="button"
                    onClick={() =>
                      form.setValue("hero.words", [
                        ...(form.getValues("hero.words") || []),
                        "",
                      ])
                    }
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Word
                  </Button>
                </div>
                <div className="space-y-3">
                  {(form.watch("hero.words") || []).map(
                    (word: string, index: number) => (
                      <div key={index} className="flex gap-2">
                        <Controller
                          control={form.control}
                          name={`hero.words.${index}` as const}
                          render={({ field }) => (
                            <Input
                              placeholder="Word"
                              {...field}
                              error={
                                form.formState.errors.hero?.words?.[index]
                                  ?.message
                              }
                              className="flex-1"
                            />
                          )}
                        />
                        <Button
                          type="button"
                          onClick={() => {
                            const words = form.getValues("hero.words") || [];
                            form.setValue(
                              "hero.words",
                              words.filter(
                                (_: string, i: number) => i !== index
                              )
                            );
                          }}
                          variant="outline"
                          size="icon"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  )}
                </div>
              </div>
              <Separator className="my-4" />
              {/* Footer Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Office Locations</label>
                  <Button
                    type="button"
                    onClick={() =>
                      locationsFields.append({
                        country: "",
                        address: "",
                        phone: "",
                        email: "",
                      })
                    }
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Location
                  </Button>
                </div>
                <div className="space-y-3">
                  {locationsFields.fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-3 gap-2 items-end"
                    >
                      <Input
                        label="Country"
                        {...form.register(`footer.locations.${index}.country`)}
                        error={
                          form.formState.errors.footer?.locations?.[index]
                            ?.country?.message
                        }
                      />
                      <Input
                        label="Address"
                        {...form.register(`footer.locations.${index}.address`)}
                        error={
                          form.formState.errors.footer?.locations?.[index]
                            ?.address?.message
                        }
                      />
                      <Input
                        label="Phone"
                        {...form.register(`footer.locations.${index}.phone`)}
                        error={
                          form.formState.errors.footer?.locations?.[index]
                            ?.phone?.message
                        }
                      />
                      <Input
                        label="Email"
                        {...form.register(`footer.locations.${index}.email`)}
                        error={
                          form.formState.errors.footer?.locations?.[index]
                            ?.email?.message
                        }
                      />
                      <Button
                        type="button"
                        onClick={() => locationsFields.remove(index)}
                        variant="outline"
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="my-4" />
              {/* Footer Logo Upload */}
              <FileUpload
                label="Footer Logo"
                value={footerLogo}
                onChange={(files) => {
                  setFooterLogo(files);
                  handleLogoUpload(files, "footer");
                }}
                maxFiles={1}
              />
              <Separator className="my-4" />
              {/* Product Links */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Product Links</label>
                  <Button
                    type="button"
                    onClick={() =>
                      productLinksFields.append({ title: "", url: "" })
                    }
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Product Link
                  </Button>
                </div>
                <div className="space-y-3">
                  {productLinksFields.fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2">
                      <Input
                        placeholder="Title"
                        {...form.register(`footer.productLinks.${index}.title`)}
                        error={
                          form.formState.errors.footer?.productLinks?.[index]
                            ?.title?.message
                        }
                        className="flex-1"
                      />
                      <Input
                        placeholder="https://..."
                        type="url"
                        {...form.register(`footer.productLinks.${index}.url`)}
                        error={
                          form.formState.errors.footer?.productLinks?.[index]
                            ?.url?.message
                        }
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        onClick={() => productLinksFields.remove(index)}
                        variant="outline"
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="my-4" />
              {/* Social Icons */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Social Icons</label>
                  <Button
                    type="button"
                    onClick={() =>
                      socialIconsFields.append({ platform: "", url: "" })
                    }
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Social Icon
                  </Button>
                </div>
                <div className="space-y-3">
                  {socialIconsFields.fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2">
                      <Select
                        options={[
                          { value: "facebook", label: "Facebook" },
                          { value: "twitter", label: "Twitter" },
                          { value: "linkedin", label: "LinkedIn" },
                          { value: "instagram", label: "Instagram" },
                          { value: "youtube", label: "YouTube" },
                          { value: "github", label: "GitHub" },
                          { value: "dribbble", label: "Dribbble" },
                          { value: "behance", label: "Behance" },
                          { value: "slack", label: "Slack" },
                          { value: "other", label: "Other" },
                        ]}
                        value={
                          form.watch(`footer.socialIcons.${index}.icon`) || ""
                        }
                        onChange={(val) =>
                          form.setValue(`footer.socialIcons.${index}.icon`, val)
                        }
                        error={
                          form.formState.errors.footer?.socialIcons?.[index]
                            ?.icon?.message
                        }
                        placeholder="Select Social Platform"
                        className="flex-1"
                      />
                      <Input
                        placeholder="https://..."
                        type="url"
                        {...form.register(`footer.socialIcons.${index}.url`)}
                        error={
                          form.formState.errors.footer?.socialIcons?.[index]
                            ?.url?.message
                        }
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        onClick={() => socialIconsFields.remove(index)}
                        variant="outline"
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sticky bottom-0 left-0 bg-gray-50 pt-4 pb-2 flex gap-2 justify-end z-10 border-t border-gray-200 mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || isUpdating}
                  className="min-w-[120px]"
                >
                  {isLoading || isUpdating ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  {isLoading || isUpdating ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>

      {/* View Mode */}
      {isFetching ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-center text-destructive py-10">
          Failed to load settings.
        </div>
      ) : (
        <div className="grid gap-6">
          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {data?.navigation?.map(
                  (
                    item: { title: string; url: string; enabled?: boolean },
                    idx: number
                  ) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-2 rounded-lg border transition-all ${
                        item.enabled
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <span
                        className={`font-semibold flex items-center gap-1 ${
                          item.enabled ? "text-green-700" : "text-gray-500"
                        }`}
                      >
                        {item.enabled ? (
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-green-500"
                          >
                            <path d="M5 10l4 4 6-8" />
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-gray-400"
                          >
                            <circle cx="9" cy="9" r="7" />
                          </svg>
                        )}
                        {item.title}
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-blue-600 hover:underline flex items-center gap-1 ml-auto ${
                          !item.enabled
                            ? "pointer-events-none text-gray-400"
                            : ""
                        }`}
                        tabIndex={item.enabled ? 0 : -1}
                      >
                        Visit <ExternalLink className="h-3 w-3" />
                      </a>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ml-2 ${
                          item.enabled
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {item.enabled ? "Active" : "Inactive"}
                      </span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
          {/* Hero Section */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <p className="text-sm text-muted-foreground">Title</p>
                <p className="font-medium">{data?.hero?.title}</p>
              </div>
              <div className="mb-2">
                <p className="text-sm text-muted-foreground">Subtitle</p>
                <p className="font-medium">{data?.hero?.subtitle}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Words</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data?.hero?.words?.map((word: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-muted px-2 py-1 rounded text-xs"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Branding & Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Branding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Navigation Logo
                  </p>
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <Image
                      width={150}
                      height={150}
                      src={data?.navLogo || "/placeholder.svg"}
                      alt="Nav Logo"
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Footer Logo
                  </p>
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <Image
                      width={150}
                      height={150}
                      src={data?.footer?.logo || "/placeholder.svg"}
                      alt="Footer Logo"
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Footer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground">
                    Office Locations
                  </p>
                  <div className="space-y-2">
                    {data?.footer?.locations?.map(
                      (
                        loc: {
                          country: string;
                          address: string;
                          phone: string;
                          email: string;
                        },
                        idx: number
                      ) => (
                        <div key={idx} className="border rounded p-2">
                          <div>
                            <span className="font-medium">Country:</span>{" "}
                            {loc.country}
                          </div>
                          <div>
                            <span className="font-medium">Address:</span>{" "}
                            {loc.address}
                          </div>
                          <div>
                            <span className="font-medium">Phone:</span>{" "}
                            {loc.phone}
                          </div>
                          <div>
                            <span className="font-medium">Email:</span>{" "}
                            {loc.email}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground">Product Links</p>
                  <div className="space-y-1">
                    {data?.footer?.productLinks?.map(
                      (link: { title: string; url: string }, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="font-medium">{link.title}</span>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1"
                          >
                            Visit <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Social Icons</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {data?.footer?.socialIcons?.map(
                      (icon: { icon: string; url: string }, idx: number) => (
                        <a
                          key={idx}
                          href={icon.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 border rounded text-xs hover:underline"
                        >
                          <span>{icon.icon}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
