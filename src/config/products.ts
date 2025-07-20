// config/products.ts
// Define interfaces for better type safety

// Interface for detailed specifications, using a dictionary-like structure
// where keys are specification categories (e.g., "Standards", "Device Interface")
// and values are arrays of strings for each spec item.
export interface ProductSpecifications {
  [key: string]: string[];
}

export interface Product {
  productId: string;
  productName: string;
  brand: string; // Added brand
  category: string; // Added category for direct product link
  price: number;
  stock: number;
  description: string;
  features: string[];
  imageUrl: string;
  // New fields for detailed specifications
  specifications?: ProductSpecifications;
  packageContents?: string[];
  productModel?: string; // Add product model
  origin?: string; // Add origin (USA, Made in China/Taiwan etc.)
  ndaaCompliant?: boolean; // Add NDAA compliance
}

export interface ProductItem {
  id: number;
  name: string;
  href: string; // This will be the full path like /products/routers or /products/accessories/connector
  subItems?: ProductItem[];
  products?: Product[];
  description?: string; // Add description for categories
}

// Your product data
export const productsData: ProductItem[] = [
  {
    id: 1,
    name: "Products",
    href: "/products", // Base path for all products
    subItems: [
      {
        id: 2,
        name: "Routers",
        href: "/products/routers",
        products: [
          {
            productId: "RTR001",
            productName: "Gigabit Wireless Router AX3000",
            productModel: "TEW-831DR",
            brand: "TRENDnet",
            category: "Routers",
            price: 89.99,
            stock: 150,
            description:
              "High-speed Wi-Fi 6 (802.11ax) enabled router, ensuring a strong internet connection for your home or office. Ideal for gaming and 4K streaming.",
            features: [
              "Wi-Fi 6 (802.11ax)",
              "Dual-Band (2.4GHz & 5GHz)",
              "4 Gigabit Ethernet Ports",
              "Parental Control",
              "VPN Support",
              "Pre-encrypted for convenience",
              "One touch network connection with WPS",
              "Multi-User MIMO (MU-MIMO)",
              "NDAA compliant",
            ],
            imageUrl: "/images/istockphoto-495732397-612x612.jpg",
            specifications: {
              Standards: [
                "IEEE 802.3",
                "IEEE 802.3u",
                "IEEE 802.3ab",
                "IEEE 802.1Q",
                "IEEE 802.1p",
                "IEEE 802.11a",
                "IEEE 802.11b",
                "IEEE 802.11g",
                "IEEE 802.11n (up to 300Mbps)",
                "IEEE 802.11ac (up to 867Mbps)",
              ],
              "Device Interface": [
                "3 x 10/100Mbps LAN ports",
                "1 x Gigabit WAN port",
                "WPS/Reset button",
                "LED indicators",
              ],
              "Special Features": [
                "IEEE 802.1Q tagged-based VLAN",
                "Bandwidth controls",
                "MU-MIMO",
                "4 x 5 dBi dual band antennas",
                "IPv6 support",
                "Multi-Language interface: English, Spanish, French, German, Russian/Portuguese",
                "Pre-encrypted wireless network",
                "TR-069",
              ],
              "Access Control": [
                "Wireless encryption: 64/128-bits WEP; WPA/WPA2",
                "NAT, virtual server/port forwarding, port triggering, firewall traffic rules, DMZ host, UPnP/NAT-PMP, allow/deny ping on WAN interface",
                "PPTP/L2TP/IPsec VPN passthrough, FTP/TFTP/SIP/RTSP/IRC/H.323 passthrough",
                "MAC, IP, Domain name, Application filtering",
                "Wireless client isolation",
                "DoS prevention",
              ],
              "Quality of Service": ["WMM"],
              "Management/Monitoring": [
                "HTTP/HTTPS web-based management",
                "Internal system logging",
                "Manual firmware upgrade",
                "Backup and restore configuration",
                "Diagnostic tools: Built-in ping and traceroute network utilities",
              ],
              Frequency: ["2.412 – 2.472GHz", "5.180 – 5.825GHz"],
              Modulation: [
                "802.11b: CCK, DQPSK, DBPSK",
                "802.11a/g: OFDM with BPSK, QPSK and 16/64-QAM",
                "802.11n: BPSK, QPSK, 16-QAM, 64-QAM, 256-QAM with OFDM",
                "802.11ac: OFDM with BPSK, QPSK and 16/64/256-QAM",
              ],
              "Media Access Protocol": ["CSMA/CA with ACK"],
              "Antenna Gain": ["4 x 5 dBi Fixed Antenna"],
              "Wireless Output Power": [
                "802.11a: FCC: 16 dBm (max.) / IC: 16 dBm (max.)",
                "802.11b: FCC: 18 dBm (max.) / IC: 18 dBm (max.)",
                "802.11g: FCC: 17 dBm (max.) / IC: 17 dBm (max.)",
                "802.11n (2.4GHz): FCC: 17 dBm (max.) / IC: 17 dBm (max.)",
                "802.11n (5GHz): FCC: 15 dBm (max.) / IC: 15 dBm (max.)",
                "802.11ac: FCC: 13 dBm (max.) / IC: 13 dBm (max.)",
              ],
              "Receiving Sensitivity": [
                "802.11a: -75 dBm (typical) @ 54Mbps",
                "802.11b: -90 dBm (typical) @ 11Mbps",
                "802.11g: -72 dBm (typical) @ 54Mbps",
                "802.11n (2.4GHz): -72 dBm (typical) @ 300Mbps",
                "802.11n (5GHz): -72 dBm (typical) @ 867Mbps",
                "802.11ac: -61 dBm (typical) @ 867Mbps",
              ],
              "Wireless Channels": [
                "2.4GHz: FCC: 1–11",
                "5GHz: FCC: 36, 40, 44, 48, 149, 153, 157, 161, 165,",
              ],
              Power: [
                "Input: 100 – 240V AC, 50 – 60Hz, 1A",
                "Output: 12V DC, 1A external power adapter",
                "Max. Consumption: 5.68W",
              ],
              "Operating Temperature": ["0° – 40° C (32° – 104° F)"],
              "Operating Humidity": ["Max. 90% non-condensing"],
              Certifications: ["FCC", "IC"],
              Dimensions: ["239 x 155 x 30mm (9.4 x 6.1 x 1.18 in.)"],
              Weight: ["228g (8 oz.)"],
              Warranty: ["2 year"],
            },
            packageContents: [
              "TEW-831DR",
              "Quick Installation Guide",
              "Network cable (0.9m / 3 ft.)",
              "Power adapter (12V DC, 1A)",
            ],
            origin: "USA, Made in China",
            ndaaCompliant: true,
          },
          {
            productId: "RTR002",
            productName: "Travel Router N300",
            productModel: "TL-WR802N", // Example model
            brand: "TP-Link", // Example brand
            category: "Routers",
            price: 29.5,
            stock: 300,
            description:
              "Small and portable travel router, perfect for sharing your internet connection while traveling.",
            features: ["Wi-Fi N300 (2.4GHz)", "Compact Design", "USB Power"],
            imageUrl: "/images/images (7).jpeg",
            specifications: {
              Standards: ["IEEE 802.11b/g/n"],
              "Device Interface": [
                "1 x 10/100Mbps WAN/LAN port",
                "Micro USB port for power",
              ],
              "Special Features": [
                "Repeater/AP/Router/Client/Bridge Modes",
                "Internal Antenna",
              ],
              Power: ["5V/1A USB adapter"],
              Dimensions: ["57 x 57 x 18 mm"],
              Warranty: ["1 year"],
            },
            packageContents: [
              "TL-WR802N Travel Router",
              "Power Adapter",
              "USB Cable",
              "Ethernet Cable",
              "Quick Installation Guide",
            ],
            origin: "China",
          },
          {
            productId: "RTR003",
            productName: "Wi-Fi 6 Mesh Router System (3-pack)",
            productModel: "Deco X20", // Example model
            brand: "TP-Link", // Example brand
            category: "Routers",
            price: 249.99,
            stock: 75,
            description:
              "Whole home mesh Wi-Fi 6 system, eliminating dead zones and providing seamless coverage for large homes.",
            features: [
              "Wi-Fi 6 (802.11ax) Mesh",
              "AX1800 Dual Band",
              "3 Gigabit WAN/LAN Ports per unit",
              "Seamless Roaming",
              "Parental Controls",
              "TP-Link HomeCare™",
            ],
            imageUrl: "/images/istockphoto-495732397-612x612.jpg",
            specifications: {
              Standards: [
                "IEEE 802.11ax/ac/n/a 5 GHz",
                "IEEE 802.11ax/n/b/g 2.4 GHz",
              ],
              "Wi-Fi Speeds": [
                "AX1800 (1201 Mbps on 5 GHz + 574 Mbps on 2.4 GHz)",
              ],
              "Ethernet Ports": [
                "3 Gigabit ports per Deco unit (WAN/LAN auto-sensing)",
              ],
              Antennas: ["2 internal dual-band antennas per Deco unit"],
              Dimensions: ["110 × 110 × 114 mm"],
              Warranty: ["3 years"],
            },
            packageContents: [
              "3 Deco X20 Units",
              "1 RJ45 Ethernet Cable",
              "3 Power Adapters",
              "Quick Installation Guide",
            ],
            origin: "China",
          },
        ],
      },
      {
        id: 3,
        name: "Switches",
        href: "/products/switches",
        subItems: [
          {
            id: 4,
            name: "Unmanaged Switch",
            href: "/products/switches/unmanaged",
            products: [
              {
                productId: "UNS001",
                productName: "5-Port Gigabit Unmanaged Switch",
                productModel: "TEG-S5g",
                brand: "TRENDnet",
                category: "Unmanaged Switch",
                price: 35.0,
                stock: 250,
                description:
                  "Easy-to-use 5-port Gigabit unmanaged switch, suitable for expanding small office or home networks.",
                features: [
                  "5 x Gigabit Ethernet Ports",
                  "Plug and Play",
                  "Fanless Design",
                  "Sturdy metal enclosure",
                ],
                imageUrl: "/images/images (7).jpeg",
                specifications: {
                  Standards: ["IEEE 802.3", "IEEE 802.3u", "IEEE 802.3ab"],
                  "Device Interface": ["5 x Gigabit RJ-45 ports"],
                  "Data Transfer Rate": [
                    "10/100/1000Mbps (Half-duplex)",
                    "20/200/2000Mbps (Full-duplex)",
                  ],
                  "Switch Fabric": ["10 Gbps"],
                  Dimensions: ["99 x 99 x 25 mm"],
                  Weight: ["260g"],
                  Power: ["5V DC, 1A external power adapter"],
                  Warranty: ["Limited Lifetime Warranty"],
                },
                packageContents: [
                  "TEG-S5g",
                  "Quick Installation Guide",
                  "Power Adapter",
                ],
                origin: "USA, Made in Taiwan",
              },
              {
                productId: "UNS002",
                productName: "8-Port Fast Ethernet Unmanaged Switch",
                productModel: "TE100-S8",
                brand: "TRENDnet",
                category: "Unmanaged Switch",
                price: 25.0,
                stock: 400,
                description:
                  "8-port Fast Ethernet unmanaged switch, ideal for basic networking requirements.",
                features: [
                  "8 x Fast Ethernet Ports",
                  "Auto-MDI/MDIX",
                  "Compact and lightweight design",
                ],
                imageUrl: "/images/images (7).jpeg",
                specifications: {
                  Standards: ["IEEE 802.3", "IEEE 802.3u"],
                  "Device Interface": ["8 x 10/100Mbps RJ-45 ports"],
                  "Data Transfer Rate": [
                    "10/100Mbps (Half-duplex)",
                    "20/200Mbps (Full-duplex)",
                  ],
                  "Switch Fabric": ["1.6 Gbps"],
                  Dimensions: ["140 x 90 x 27 mm"],
                  Weight: ["200g"],
                  Power: ["5V DC, 0.6A external power adapter"],
                  Warranty: ["Limited Lifetime Warranty"],
                },
                packageContents: [
                  "TE100-S8",
                  "Quick Installation Guide",
                  "Power Adapter",
                ],
                origin: "USA, Made in China",
              },
            ],
          },
          {
            id: 5,
            name: "Managed Switch",
            href: "/products/switches/managed",
            products: [
              {
                productId: "MNS001",
                productName: "24-Port Gigabit Managed Switch with SFP",
                productModel: "TRENDnet TEG-S17",
                brand: "TRENDnet",
                category: "Managed Switch",
                price: 299.99,
                stock: 80,
                description:
                  "24-port Gigabit managed switch, designed for advanced network management, including SFP ports.",
                features: [
                  "24 x Gigabit Ethernet Ports",
                  "4 x SFP Slots",
                  "VLAN, QoS, Link Aggregation",
                  "Web-based Management",
                  "32Gbps forwarding capacity",
                  "Fanless design",
                  "1U 19” rackmount brackets included",
                  "NDAA / TAA compliant",
                ],
                imageUrl: "/images/istockphoto-495732397-612x612.jpg",
                specifications: {
                  "Key Features": [
                    "16 x Gigabit RJ-45 ports",
                    "Sturdy metal switch",
                    "Built-in power supply",
                    "32Gbps forwarding capacity",
                    "Fanless design",
                    "1U 19” rackmount brackets included",
                    "NDAA / TAA compliant",
                  ],
                  Description: [
                    "The 16-Port Gigabit Switch, model TEG-S17, provides high-bandwidth performance, ease of use, and reliability. Boost office network efficiency and eliminate network congestion with gigabit speeds and a total switching capacity of 32Gbps with full-duplex mode. A built-in universal power supply reduces cable clutter, and diagnostic LEDs help with network troubleshooting. Plug and play this sturdy metal switch for reliable high-speed network connectivity.",
                  ],
                  Standards: [
                    "IEEE 802.3",
                    "IEEE 802.3u",
                    "IEEE 802.3ab",
                    "IEEE 802.3x Flow Control",
                    "IEEE 802.1p QoS",
                    "IEEE 802.1Q VLAN",
                  ],
                  "Device Interface": [
                    "16 x Gigabit RJ-45 ports",
                    "LED indicators (Power, Link/Activity)",
                  ],
                  "Data Transfer Rate": [
                    "Ethernet: 10Mbps (half duplex), 20Mbps (full duplex)",
                    "Fast Ethernet: 100Mbps (half duplex), 200Mbps (full duplex)",
                    "Gigabit: 2000Mbps (full duplex)",
                  ],
                  "Switching Capacity": ["32 Gbps"],
                  "MAC Address Table": ["8K entries"],
                  "Jumbo Frame": ["9KB"],
                  Power: ["Internal power supply: 100-240V AC, 50/60Hz"],
                  "Max. Power Consumption": ["12W"],
                  Dimensions: [
                    "440 x 180 x 44 mm (17.3 x 7.1 x 1.7 in.) (1U height)",
                  ],
                  Weight: ["1.7 kg (3.7 lb.)"],
                  "Operating Temperature": ["0 – 40 °C (32 – 104 °F)"],
                  "Operating Humidity": ["Max. 90% non-condensing"],
                  Certifications: ["FCC", "CE", "UL"],
                  Warranty: ["Limited Lifetime Warranty"],
                },
                packageContents: [
                  "TEG-S17",
                  "Rackmount kit",
                  "Quick Installation Guide",
                  "Power cord",
                ],
                origin: "USA, Made in Taiwan",
                ndaaCompliant: true,
              },
              {
                productId: "MNS002",
                productName: "48-Port Gigabit Layer 3 Managed Switch",
                productModel: "JSW-L3-48G", // Fictional model
                brand: "Janata Networks", // Fictional brand
                category: "Managed Switch",
                price: 1200.0,
                stock: 25,
                description:
                  "High-performance Layer 3 managed switch for enterprise networks, offering advanced routing and security features.",
                features: [
                  "48 x Gigabit Ethernet Ports",
                  "4 x 10G SFP+ Slots",
                  "Layer 3 Routing (Static, RIP, OSPF)",
                  "ACL, QoS, VLAN",
                  "CLI, Web-based, SNMP Management",
                  "Redundant Power Supply Support",
                ],
                imageUrl: "/images/istockphoto-495732397-612x612.jpg",
                specifications: {
                  Standards: [
                    "IEEE 802.3 series",
                    "IEEE 802.1Q",
                    "IEEE 802.1X",
                  ],
                  "Device Interface": [
                    "48 x RJ45 Gigabit ports",
                    "4 x SFP+ ports",
                    "Console Port",
                  ],
                  "Switching Capacity": ["176 Gbps"],
                  "Forwarding Rate": ["130.9 Mpps"],
                  "MAC Address Table": ["32K entries"],
                  "Jumbo Frame": ["9KB"],
                  Power: [
                    "100-240V AC, Internal PSU (Redundant option available)",
                  ],
                  Dimensions: ["440 x 300 x 44 mm (1U)"],
                  Warranty: ["5 Year Limited Warranty"],
                },
                packageContents: [
                  "JSW-L3-48G Switch",
                  "Power Cord",
                  "Rackmount Kit",
                  "Console Cable",
                  "User Manual CD",
                ],
                origin: "Bangladesh",
              },
            ],
          },
          {
            id: 6,
            name: "Unmanaged PoE",
            href: "/products/switches/poe/unmanaged",
            products: [
              {
                productId: "UPS001",
                productName: "8-Port PoE+ Unmanaged Switch",
                productModel: "TPE-TG80G",
                brand: "TRENDnet",
                category: "Unmanaged PoE",
                price: 120.0,
                stock: 120,
                description:
                  "8-port unmanaged switch with Power over Ethernet (PoE+), supplying power for IP cameras and Wi-Fi APs.",
                features: [
                  "8 x PoE+ (802.3at) Ports",
                  "120W Power Budget",
                  "Plug and Play",
                  "Gigabit speed on all ports",
                ],
                imageUrl: "/images/1.jpg",
                specifications: {
                  Standards: [
                    "IEEE 802.3",
                    "IEEE 802.3u",
                    "IEEE 802.3ab",
                    "IEEE 802.3af",
                    "IEEE 802.3at",
                  ],
                  "Device Interface": ["8 x Gigabit PoE+ ports"],
                  "PoE Power Budget": ["120W total"],
                  "Switching Capacity": ["16 Gbps"],
                  Dimensions: ["240 x 105 x 27 mm"],
                  Warranty: ["3 year"],
                },
                packageContents: [
                  "TPE-TG80G Switch",
                  "Power Adapter",
                  "Quick Installation Guide",
                ],
                origin: "USA, Made in China",
              },
            ],
          },
          {
            id: 7,
            name: "Managed PoE",
            href: "/products/switches/poe/managed",
            products: [
              {
                productId: "MPS001",
                productName: "16-Port Managed PoE+ Switch",
                productModel: "TEG-30160",
                brand: "TRENDnet",
                category: "Managed PoE",
                price: 350.0,
                stock: 60,
                description:
                  "16-port managed PoE+ switch, allowing power and data to be transmitted over a single cable, with advanced management options.",
                features: [
                  "16 x PoE+ (802.3at) Ports",
                  "250W Power Budget",
                  "VLAN, QoS, SNMP",
                  "Web-based Management",
                  "NDAA compliant",
                ],
                imageUrl: "/images/2.jpg",
                specifications: {
                  Standards: [
                    "IEEE 802.3 series",
                    "IEEE 802.3af/at",
                    "IEEE 802.1D",
                    "IEEE 802.1Q",
                  ],
                  "Device Interface": [
                    "16 x Gigabit PoE+ ports",
                    "2 x SFP slots",
                  ],
                  "PoE Power Budget": ["250W total"],
                  "Switching Capacity": ["36 Gbps"],
                  "MAC Address Table": ["8K entries"],
                  "Jumbo Frame": ["10KB"],
                  Power: ["Internal power supply: 100-240V AC"],
                  Dimensions: ["440 x 200 x 44 mm (1U)"],
                  Warranty: ["5 year"],
                },
                packageContents: [
                  "TEG-30160 Switch",
                  "Rackmount Kit",
                  "Power Cord",
                  "Quick Installation Guide",
                ],
                origin: "USA, Made in Taiwan",
                ndaaCompliant: true,
              },
            ],
          },
          {
            id: 8,
            name: "Multi-Gigabit", // Renamed for consistency
            href: "/products/switches/multigigabit",
            products: [
              {
                productId: "MGS001",
                productName: "5-Port Multi-Gigabit Switch",
                productModel: "TL-SX1005", // Example model
                brand: "TP-Link", // Example brand
                category: "Multi-Gigabit Switch",
                price: 180.0,
                stock: 40,
                description:
                  "5-port switch supporting multi-gigabit speeds, best for high-bandwidth requirements like 2.5G NAS, gaming, and Wi-Fi 6 APs.",
                features: [
                  "5 x 2.5Gbps Ports",
                  "Auto-Negotiation",
                  "Fanless Design",
                  "Sturdy Metal Casing",
                ],
                imageUrl: "/images/3.jpg",
                specifications: {
                  Standards: ["IEEE 802.3, 802.3u, 802.3ab, 802.3bz"],
                  "Device Interface": ["5 x 100Mbps/1G/2.5G RJ45 Ports"],
                  "Switching Capacity": ["25 Gbps"],
                  "MAC Address Table": ["16K entries"],
                  "Jumbo Frame": ["10KB"],
                  Power: ["12V DC / 1A External Power Adapter"],
                  Dimensions: ["158 × 101 × 25 mm"],
                  Warranty: ["5 years"],
                },
                packageContents: [
                  "TL-SX1005 5-Port 2.5G Desktop Switch",
                  "Power Adapter",
                  "Quick Installation Guide",
                ],
                origin: "China",
              },
            ],
          },
          {
            id: 9,
            name: "KVM",
            href: "/products/switches/kvm",
            products: [
              {
                productId: "KVM001",
                productName: "2-Port USB KVM Switch",
                productModel: "CS62U", // Example model
                brand: "ATEN", // Example brand
                category: "KVM Switch",
                price: 55.0,
                stock: 90,
                description:
                  "KVM switch for controlling 2 computers with a single keyboard, video, and mouse.",
                features: [
                  "2 x USB Ports",
                  "VGA/HDMI Support (depending on model)",
                  "Hot-Key Switching",
                  "Plug-n-Play, no software required",
                ],
                imageUrl: "/images/4.jpg",
                specifications: {
                  "Computer Connections": ["2"],
                  "Port Selection": ["Hot-key, Mouse"],
                  "Connectors (Console)": [
                    "Keyboard: 1 x USB Type A Female (Black)",
                    "Mouse: 1 x USB Type A Female (Black)",
                    "Video: 1 x HDB-15 Female (Blue)",
                  ],
                  "Connectors (KVM)": [
                    "2 x USB Type A Male (Black)",
                    "2 x HDB-15 Male (Blue)",
                    "2 x 3.5mm Audio Jacks (optional, if supported)",
                  ],
                  "Video Resolution": ["Up to 2048 x 1536"],
                  Dimensions: ["96 x 60 x 24 mm"],
                  Weight: ["130g"],
                  Power: ["USB Powered"],
                  Warranty: ["1 year"],
                },
                packageContents: [
                  "1x CS62U 2-Port USB KVM Switch",
                  "2x Custom KVM Cables (VGA, USB)",
                  "1x User Instructions",
                ],
                origin: "Taiwan",
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "Wi-Fi AP",
        href: "/products/wifi-ap", // Changed to wifi-ap for consistency
        subItems: [
          {
            id: 11,
            name: "Indoor",
            href: "/products/wifi-ap/indoor",
            products: [
              {
                productId: "IAP001",
                productName: "Dual-Band Ceiling Mount AP",
                productModel: "EAP225", // Example model
                brand: "TP-Link Omada", // Example brand
                category: "Wi-Fi AP - Indoor",
                price: 149.0,
                stock: 100,
                description:
                  "Dual-band ceiling mount access point, providing excellent Wi-Fi coverage in indoor environments with centralized management.",
                features: [
                  "Wi-Fi 5 (802.11ac) Wave 2",
                  "AC1350 Dual-Band",
                  "PoE Powered (802.3af/at)",
                  "Centralized Cloud Management (Omada SDN)",
                  "Seamless Roaming",
                ],
                imageUrl: "/images/3.jpg",
                specifications: {
                  Standards: ["IEEE 802.11ac/n/g/b/a"],
                  "Antenna Type": [
                    "3 internal omnidirectional antennas (2.4GHz: 3x4dBi, 5GHz: 2x5dBi)",
                  ],
                  "Wireless Functions": [
                    "Multiple SSIDs",
                    "Band Steering",
                    "Airtime Fairness",
                    "Beamforming",
                  ],
                  "Wireless Security": [
                    "WPA-PSK/WPA2-PSK",
                    "MAC Address Filtering",
                    "Client Isolation",
                  ],
                  Interface: [
                    "1 x Gigabit Ethernet (RJ-45) Port (Supports IEEE 802.3af/at PoE)",
                  ],
                  Power: ["802.3af/at PoE", "12VDC/1A Power Adapter"],
                  Dimensions: ["180 x 180 x 47.5 mm"],
                  Warranty: ["3 years"],
                },
                packageContents: [
                  "EAP225 Wireless Access Point",
                  "Power Adapter",
                  "Mounting Kits (Ceiling/Wall)",
                  "Installation Guide",
                ],
                origin: "China",
              },
            ],
          },
          {
            id: 12,
            name: "Outdoor",
            href: "/products/wifi-ap/outdoor",
            products: [
              {
                productId: "OAP001",
                productName: "Outdoor Long-Range AP",
                productModel: "ePMP Force 180",
                brand: "Cambium Networks",
                category: "Wi-Fi AP - Outdoor", // Changed category
                price: 250.0,
                stock: 70,
                description:
                  "Long-range access point designed for outdoor use, providing reliable connectivity even in harsh weather.",
                features: [
                  "IP67 Weatherproof",
                  "High-Gain Antennas (16 dBi integrated)", // Added detail from provided spec
                  "PoE Support",
                  "Gigabit Ethernet Port", // Added detail from provided spec
                  "Point-to-Point/Multi-Point capabilities",
                ],
                imageUrl: "/images/1.jpg",
                specifications: {
                  Model: ["ePMP Force 180"],
                  Frequency: ["5 GHz (4910 – 5970 MHz)"],
                  "Integrated Antenna Peak Gain": ["16 dBi"],
                  Description: [
                    "The ePMP Force 180 is the second generation of ePMP Integrated Radio Modules. It has the exceptional reliability and quality that users have come to expect from the ePMP product line and adds some significant performance enhancements. This radio comes in a small, sleek form factor but delivers high performance. The antenna gain is increased by 3dB to 16dBi which will provide a 40% increase in range. It comes equipped with a Gigabit Ethernet port so that nothing will limit this product in delivering the maximum throughput.",
                    "The radio module is powered by PoE and the Ethernet port has the unique capability of being powered from a PoE injector that conforms to standard pinouts or from a PoE injector that conforms to Cambium pinouts. This makes it possible to upgrade existing radio locations to Force 180 without changing the PoE injector. It also includes an adjustable mounting bracket that eases the task of installing and properly aligning the radio.",
                  ],
                  "Physical Layer": ["2x2 MIMO/OFDM"],
                  "Ethernet Interface": [
                    "10/100/1000BaseT, PoE (802.3af compatible)",
                  ],
                  Power: ["24-30 VDC, 10W Max (PoE injector included)"],
                  Dimensions: ["296 x 296 x 103 mm (11.7 x 11.7 x 4.1 in.)"],
                  Weight: ["1.2 kg (2.6 lbs)"],
                  Warranty: ["1-Year Warranty"],
                },
                packageContents: [
                  "ePMP Force 180 Radio",
                  "Mounting Bracket",
                  "PoE Injector",
                  "Quick Start Guide",
                ],
                origin: "USA", // Assuming Cambium is US-based
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "Radio Device",
        href: "/products/radio-device",
        products: [
          {
            productId: "RAD001",
            productName: "5GHz Wireless Bridge Kit",
            productModel: "ePMP Force 180", // This product matches OAP001, so reusing model
            brand: "Cambium Networks",
            category: "Radio Device",
            price: 199.0,
            stock: 50,
            description:
              "A 5GHz wireless bridge kit for wirelessly connecting two networks over a distance, ideal for point-to-point links.",
            features: [
              "5GHz Frequency",
              "Point-to-Point",
              "Up to 5KM Range",
              "Easy Setup",
              "High-Gain Integrated Antenna",
              "Gigabit Ethernet",
            ],
            imageUrl: "/images/1.jpg",
            specifications: {
              Model: ["ePMP Force 180 (Kit includes 2 units)"],
              Frequency: ["5 GHz (4910 – 5970 MHz)"],
              "Integrated Antenna Peak Gain": ["16 dBi"],
              Description: [
                "This kit provides a complete 5GHz wireless bridge solution, enabling robust point-to-point connections for extending networks or backhauling internet. Based on the reliable ePMP Force 180, it offers excellent performance and simple deployment. Ideal for remote office connectivity, surveillance, or high-bandwidth data transfer across distances.",
              ],
              "Ethernet Interface": [
                "10/100/1000BaseT, PoE (802.3af compatible)",
              ],
              Power: ["24-30 VDC, 10W Max per unit (PoE injectors included)"],
              Dimensions: [
                "296 x 296 x 103 mm (11.7 x 11.7 x 4.1 in.) per unit",
              ],
              Weight: ["1.2 kg (2.6 lbs) per unit"],
              Warranty: ["1-Year Warranty"],
            },
            packageContents: [
              "2 x ePMP Force 180 Radio",
              "2 x Mounting Brackets",
              "2 x PoE Injectors",
              "2 x Quick Start Guides",
            ],
            origin: "USA",
          },
          {
            productId: "RAD002",
            productName: "2.4GHz Outdoor CPE",
            productModel: "CPE210", // Example model
            brand: "TP-Link Pharos", // Example brand
            category: "Radio Device",
            price: 65.0,
            stock: 100,
            description:
              "2.4GHz outdoor CPE for long-distance wireless data transmission, suitable for WISP client access and long-range wireless network solutions.",
            features: [
              "2.4GHz (300Mbps)",
              "12dBi Dual-Polarized Directional Antenna",
              "IPX5 Weatherproof Enclosure",
              "Passive PoE Support",
              "Centralized Management Software",
            ],
            imageUrl: "/images/2.jpg",
            specifications: {
              Standards: ["IEEE 802.11b/g/n"],
              Frequency: ["2.4~2.483GHz"],
              "Antenna Gain": ["12dBi Dual-polarized Directional Antenna"],
              "Ethernet Interface": [
                "1 x 10/100Mbps Shielded Ethernet Port (LAN0/PoE)",
                "1 x 10/100Mbps Shielded Ethernet Port (LAN1)",
              ],
              Power: ["Passive PoE (up to 60 meters)"],
              Dimensions: ["276 × 78.5 × 65 mm"],
              Warranty: ["3 years"],
            },
            packageContents: [
              "Outdoor Wireless CPE",
              "24V 1A Passive PoE Adapter",
              "Pole Mounting Straps",
              "AC Power Cord",
              "Installation Guide",
            ],
            origin: "China",
          },
        ],
      },
      {
        id: 14,
        name: "Accessories",
        href: "/products/accessories",
        subItems: [
          {
            id: 15,
            name: "Connector",
            href: "/products/accessories/connector",
            products: [
              {
                productId: "CON001",
                productName: "RJ45 CAT6 Connector (100-pack)",
                productModel: "CAT6-CONN-100", // Example model
                brand: "Generic/Standard", // Example brand
                category: "Accessories - Connector",
                price: 15.0,
                stock: 500,
                description:
                  "RJ45 CAT6 connectors for Ethernet cables, in a pack of 100, ensuring reliable network terminations.",
                features: [
                  "CAT6 Compatible",
                  "Gold-Plated Pins",
                  "Easy Crimp",
                  "Transparent Casing",
                ],
                imageUrl: "/images/2.jpg",
                specifications: {
                  "Connector Type": ["RJ45"],
                  "Cable Compatibility": ["CAT6 UTP/FTP"],
                  "Contact Plating": ["50 micron gold-plated"],
                  "Housing Material": ["Polycarbonate"],
                  "Wire Gauge Support": ["23-26 AWG"],
                },
                packageContents: ["100 x RJ45 CAT6 Connectors"],
                origin: "China",
              },
            ],
          },
          {
            id: 16,
            name: "Fiber Optic Cable",
            href: "/products/accessories/fiber-optic-cable",
            products: [
              {
                productId: "FOC001",
                productName: "Single-Mode Fiber Optic Cable (100m)",
                productModel: "OS2-SMF-100M-LC", // Example model
                brand: "Generic/Standard",
                category: "Accessories - Fiber Optic Cable",
                price: 75.0,
                stock: 100,
                description:
                  "100-meter single-mode fiber optic cable for high-speed data transmission over long distances.",
                features: [
                  "OS2 Single-Mode",
                  "LC-LC Connectors",
                  "100 Meter Length",
                  "Low Insertion Loss",
                  "High Bandwidth",
                ],
                imageUrl: "/images/4.jpg",
                specifications: {
                  "Fiber Type": ["OS2 Single-Mode"],
                  "Connector Type": ["LC to LC Duplex"],
                  "Cable Diameter": ["3.0 mm"],
                  "Jacket Material": ["LSZH"],
                  "Operating Temperature": ["-20°C to 70°C"],
                },
                packageContents: [
                  "1x 100m OS2 Single-Mode LC-LC Fiber Optic Cable",
                ],
                origin: "China",
              },
            ],
          },
          {
            id: 17,
            name: "Injector",
            href: "/products/accessories/injector",
            products: [
              {
                productId: "INJ001",
                productName: "Gigabit PoE Injector",
                productModel: "TL-PoE150S", // Example model
                brand: "TP-Link",
                category: "Accessories - Injector",
                price: 30.0,
                stock: 200,
                description:
                  "Gigabit PoE injector for supplying power to PoE devices from non-PoE switches, simplifying deployments.",
                features: [
                  "Gigabit Speed",
                  "IEEE 802.3af/at Compatible",
                  "Plug and Play",
                  "Auto-negotiation for voltage",
                ],
                imageUrl: "/images/3.jpg",
                specifications: {
                  Standards: ["IEEE 802.3, 802.3u, 802.3ab, 802.3af, 802.3at"],
                  "Input Voltage": ["100-240V AC, 50/60Hz"],
                  "Output Voltage": ["48V DC"],
                  "Power Output": ["Max 30W"],
                  Interface: [
                    "1 x 10/100/1000Mbps RJ45 port (Data IN)",
                    "1 x 10/100/1000Mbps RJ45 port (Data + Power OUT)",
                  ],
                  Dimensions: ["85.8 × 46 × 29.8 mm"],
                  Warranty: ["3 years"],
                },
                packageContents: [
                  "Gigabit PoE Injector",
                  "Power Cord",
                  "Installation Guide",
                ],
                origin: "China",
              },
            ],
          },
          {
            id: 18,
            name: "Patch Cord",
            href: "/products/accessories/patch-cord",
            products: [
              {
                productId: "PC001",
                productName: "CAT6 Ethernet Patch Cord (3m)",
                productModel: "CAT6-PC-3M", // Example model
                brand: "Generic/Standard",
                category: "Accessories - Patch Cord",
                price: 5.0,
                stock: 1000,
                description:
                  "3-meter CAT6 Ethernet patch cord, suitable for network connections, ensuring high-speed data integrity.",
                features: [
                  "CAT6 Standard",
                  "3 Meter Length",
                  "Snagless Boot",
                  "Pure Copper Conductors",
                ],
                imageUrl: "/images/1.jpg",
                specifications: {
                  "Cable Type": ["CAT6 UTP Patch Cable"],
                  Length: ["3 meters (10 ft)"],
                  "Connector Type": ["RJ45 to RJ45"],
                  "Jacket Material": ["PVC"],
                  "Conductor Gauge": ["24 AWG"],
                  "Color Options": ["Various"],
                },
                packageContents: ["1x 3m CAT6 Ethernet Patch Cord"],
                origin: "China",
              },
            ],
          },
          {
            id: 19,
            name: "PDU",
            href: "/products/accessories/pdu",
            products: [
              {
                productId: "PDU001",
                productName: "8-Outlet Rack Mount PDU",
                productModel: "AP7900", // Example model
                brand: "APC", // Example brand
                category: "Accessories - PDU",
                price: 90.0,
                stock: 40,
                description:
                  "8-outlet Power Distribution Unit (PDU) suitable for rack mounting, providing reliable power to your equipment.",
                features: [
                  "8 x NEMA 5-15R Outlets",
                  "1U Rack Mount",
                  "Overload Protection",
                  "Input Voltage 120V",
                ],
                imageUrl: "/images/4.jpg",
                specifications: {
                  "Output Voltage": ["120V"],
                  "Output Connectors": ["(8) NEMA 5-15R"],
                  "Input Connections": ["NEMA 5-15P"],
                  "Cord Length": ["1.83 meters"],
                  "Rack Height": ["1U"],
                  Dimensions: ["44.5 x 44.5 x 6.2 cm (17.5 x 1.75 x 2.44 in.)"],
                  Weight: ["1.5 kg"],
                  Warranty: ["2 years"],
                },
                packageContents: [
                  "8-Outlet Rack Mount PDU",
                  "User Manual",
                  "Mounting Hardware",
                ],
                origin: "USA",
              },
            ],
          },
          {
            id: 20,
            name: "TJ Box", // Corrected to Title Case for consistency
            href: "/products/accessories/tj-box",
            products: [
              {
                productId: "TJB001",
                productName: "Network Junction Box",
                productModel: "NB-TJB1", // Fictional model
                brand: "Network Basics", // Fictional brand
                category: "Accessories - TJ Box",
                price: 10.0,
                stock: 300,
                description:
                  "Junction box for network cable connections, providing a neat and secure point for cable termination.",
                features: [
                  "Durable Plastic Construction",
                  "Easy Installation",
                  "Suitable for wall mounting",
                ],
                imageUrl: "/images/1.jpg",
                specifications: {
                  Material: ["ABS Plastic"],
                  Dimensions: ["86 x 86 x 30 mm (approx)"],
                  "Port Capacity": [
                    "Single or Dual RJ45 modules (not included)",
                  ],
                  Color: ["White"],
                },
                packageContents: ["1x Network Junction Box", "Mounting Screws"],
                origin: "China",
              },
            ],
          },
          {
            id: 21,
            name: "UTP Cable",
            href: "/products/accessories/utp-cable",
            products: [
              {
                productId: "UTC001",
                productName: "CAT6 UTP Cable (305m Roll)",
                productModel: "PDCB-C6UTP-305", // Example model
                brand: "D-Link", // Example brand
                category: "Accessories - UTP Cable",
                price: 150.0,
                stock: 80,
                description:
                  "305-meter roll of CAT6 UTP cable, ideal for network installations, providing stable and high-speed data transmission.",
                features: [
                  "CAT6 Standard",
                  "305 Meter (1000ft)",
                  "Solid Copper Conductors",
                  "UL Listed",
                ],
                imageUrl: "/images/4.jpg",
                specifications: {
                  "Cable Type": ["CAT6 UTP (Unshielded Twisted Pair)"],
                  Length: ["305 meters (1000 feet)"],
                  "Conductor Material": ["Solid Bare Copper"],
                  "Conductor Gauge": ["23 AWG"],
                  "Jacket Material": ["PVC"],
                  "Operating Temperature": ["-20°C to 60°C"],
                  Compliance: ["TIA/EIA 568-C.2, ISO/IEC 11801"],
                },
                packageContents: ["1x 305m Roll of CAT6 UTP Cable"],
                origin: "China",
              },
            ],
          },
          {
            id: 22,
            name: "ONU",
            href: "/products/accessories/onu",
            products: [
              {
                productId: "ONU001",
                productName: "GPON ONU (Single Port)",
                productModel: "HG8310M", // Example model
                brand: "Huawei", // Example brand
                category: "Accessories - ONU",
                price: 45.0,
                stock: 150,
                description:
                  "Single-port GPON ONU for Fiber-to-the-Home (FTTH) networks, providing reliable fiber connectivity.",
                features: [
                  "GPON Standard (ITU-T G.984)",
                  "1 x Gigabit Ethernet Port",
                  "Compact Design",
                  "Plug and Play",
                ],
                imageUrl: "/images/2.jpg",
                specifications: {
                  "GPON Port": ["SC/UPC or SC/APC"],
                  "Ethernet Port": ["1 x GE Port (RJ-45)"],
                  "Operating Mode": ["Bridge/Route Mode"],
                  Power: ["12V DC, 0.5A"],
                  Dimensions: ["82 x 90 x 25 mm"],
                  Weight: ["100g"],
                  Warranty: ["1 year"],
                },
                packageContents: [
                  "GPON ONU",
                  "Power Adapter",
                  "Quick Start Guide",
                ],
                origin: "China",
              },
            ],
          },
        ],
      },
      {
        id: 23,
        name: "PoE Injector", // Renamed for consistency
        href: "/products/poe-injector",
        products: [
          {
            productId: "PI001",
            productName: "Gigabit High Power PoE++ Injector",
            productModel: "TPE-117GI",
            brand: "TRENDnet",
            category: "PoE Injector",
            price: 70.0,
            stock: 100,
            description:
              "Gigabit PoE injector for high-power PoE++ devices, delivering reliable power and data over Ethernet.",
            features: [
              "Gigabit Speed",
              "IEEE 802.3bt (PoE++) Compatible",
              "60W Output Power",
              "Plug and Play",
              "Wall-mountable design",
            ],
            imageUrl: "/images/2.jpg",
            specifications: {
              Standards: [
                "IEEE 802.3, 802.3u, 802.3ab, 802.3af, 802.3at, 802.3bt",
              ],
              "Data Rates": ["10/100/1000Mbps"],
              Interface: ["1 x RJ-45 Data In, 1 x RJ-45 Data + PoE Out"],
              "PoE Power Output": ["60W (max)"],
              Power: ["Input: 100-240V AC, 50/60Hz"],
              Dimensions: ["155 x 70 x 36 mm"],
              Weight: ["250g"],
              Warranty: ["3 year"],
            },
            packageContents: [
              "TPE-117GI PoE Injector",
              "Power Cord",
              "Quick Installation Guide",
            ],
            origin: "USA, Made in China",
            ndaaCompliant: true,
          },
        ],
      },
      {
        id: 24,
        name: "SFP Module",
        href: "/products/sfp-module",
        products: [
          {
            productId: "SFP001",
            productName: "1.25G SFP Transceiver (Multi-Mode)",
            productModel: "TL-SM311LS", // Example model
            brand: "TP-Link",
            category: "SFP Module",
            price: 25.0,
            stock: 200,
            description:
              "1.25G multi-mode SFP transceiver for fiber optic connections, suitable for short-distance fiber links.",
            features: [
              "1.25Gbps Speed",
              "Multi-Mode Fiber (MMF)",
              "LC Duplex Connector",
              "550m Range (850nm)",
              "Hot-Pluggable",
            ],
            imageUrl: "/images/3.jpg",
            specifications: {
              Standards: ["IEEE 802.3z"],
              "Data Rate": ["1.25 Gbps"],
              "Fiber Type": ["Multi-Mode Fiber (50/125µm or 62.5/125µm)"],
              "Max Cable Distance": ["550m"],
              Wavelength: ["850nm"],
              Interface: ["LC/UPC Duplex"],
              "Power Supply": ["3.3V"],
              Dimensions: ["57.5 x 13.9 x 12.25 mm"],
              Warranty: ["5 years"],
            },
            packageContents: ["1.25G SFP Transceiver"],
            origin: "China",
          },
        ],
      },
      {
        id: 25,
        name: "Network Rack",
        href: "/products/network-rack",
        products: [
          {
            productId: "NRK001",
            productName: "9U Wall Mount Network Rack",
            productModel: "RM-9U", // Fictional model
            brand: "Generic/Standard",
            category: "Network Rack",
            price: 180.0,
            stock: 30,
            description:
              "9U wall mount network rack for securely installing your network equipment, ideal for small server rooms or wiring closets.",
            features: [
              "9U Height",
              "Wall Mountable",
              "Lockable Front Door (Glass/Perforated)",
              "Ventilation Slots",
              "Adjustable Mounting Rails",
            ],
            imageUrl: "/images/4.jpg",
            specifications: {
              "Rack Height": ["9U"],
              Material: ["Cold Rolled Steel"],
              "Loading Capacity": ["60kg"],
              "Protection Rating": ["IP20"],
              Dimensions: ["600mm (W) x 450mm (D) x 501mm (H)"],
              Color: ["Black"],
              Warranty: ["1 year"],
            },
            packageContents: [
              "9U Wall Mount Network Rack (Disassembled)",
              "Mounting Hardware Kit",
              "Keys (for lockable door)",
              "Assembly Manual",
            ],
            origin: "China",
          },
          {
            productId: "NRK002",
            productName: "42U Server Rack Cabinet",
            productModel: "SR42U", // Example model
            brand: "Tripp Lite",
            category: "Network Rack",
            price: 800.0,
            stock: 10,
            description:
              "42U full-size server rack cabinet for data centers and large network installations, offering ample space and robust security.",
            features: [
              "42U Height",
              "Floor Standing",
              "Lockable Front/Rear Doors & Side Panels",
              "Perforated Doors for Airflow",
              "Casters and Leveling Feet",
              "Cable Management Options",
            ],
            imageUrl: "/images/4.jpg",
            specifications: {
              "Rack Height": ["42U"],
              Material: ["Steel"],
              "Loading Capacity": ["1360kg (Static)"],
              "External Dimensions": [
                "2057 x 600 x 1070 mm (81 x 23.6 x 42.1 in.)",
              ],
              "Internal Rack Depth": ["940 mm"],
              Color: ["Black"],
              Compliance: ["RoHS"],
              Warranty: ["5 years"],
            },
            packageContents: [
              "42U Server Rack Cabinet",
              "Mounting Hardware Kit",
              "Keys",
              "User Manual",
            ],
            origin: "USA",
          },
        ],
      },
    ],
  },
];

// Helper function to flatten the product data for easy lookup
export function flattenProductData(data: ProductItem[]) {
  const allItems: ProductItem[] = [];
  const allProducts: Product[] = [];

  function recurse(items: ProductItem[]) {
    items.forEach((item) => {
      // Add only category/sub-category items here that have subItems or are the top-level 'Products'
      // This helps in distinguishing between category pages and product detail pages
      if (item.subItems || item.href.startsWith("/products")) {
        allItems.push(item);
      }

      if (item.products) {
        item.products.forEach((product) => allProducts.push(product));
      }
      if (item.subItems) {
        recurse(item.subItems);
      }
    });
  }

  recurse(data);
  return { allItems, allProducts };
}

// Prepare data for static generation (optional, but useful for build time validation)
export const { allItems, allProducts } = flattenProductData(productsData);
