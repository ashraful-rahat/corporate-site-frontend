export interface ISettings {
    navigation: {
        title: string;
        url: string;
        enabled: boolean;
    }[];
    hero: {
        title: string;
        subtitle: string;
        words: string[];
    };
    footer: {
        locations: {
            country: string;
            address: string;
            phone: string;
            email: string;
        }[];
        productLinks: {
            title: string;
            url: string;
        }[];
        socialIcons: {
            platform: string;
            url: string;
            icon?: string;
        }[];
        logo?: string | undefined;
    };
    navLogo?: string | undefined;
}