import gemPurple from "../assets/gems/purple-gem.webp";
import gemBlue from "../assets/gems/blue-gem.webp";
import gemGreen from "../assets/gems/green-gem.webp";
import gemOrange from "../assets/gems/orange-gem.webp";
import veCoin from "../assets/coins/ve-coin.webp";
import heroImage from "../assets/hero/portal.png";
import { ListChecks, Search, ShieldCheck, Check, Clock, X } from "lucide-react";
import chestImage from "../assets/hero/chest.webp";
import shieldImage from "../assets/hero/shield.webp";
export const exchangeOptions = [
  {
    id: "exchange-01",
    type: "gem-to-ve",
    title: "Daily Gem Conversion",
    description: "Convert your earned Gems into VEs instantly.",
    requiredGems: 28,
    receiveVEs: 151,
    badge: "Popular",
    theme: "purple",
    image: gemPurple,
  },
  {
    id: "exchange-02",
    type: "gem-to-ve",
    title: "Reward Conversion",
    description: "Higher conversion for your better rewards.",
    requiredGems: 39,
    receiveVEs: 168,
    badge: "Popular",
    theme: "blue",
    image: gemBlue,
  },
  {
    id: "exchange-03",
    type: "gem-to-ve",
    title: "Value Conversion",
    description: "Unlock greater value with more Gems.",
    requiredGems: 57,
    receiveVEs: 255,
    badge: null,
    theme: "green",
    image: gemGreen,
  },
  {
    id: "exchange-04",
    type: "gem-to-ve",
    title: "Premium Conversion",
    description: "Premium conversion for premium rewards.",
    requiredGems: 100,
    receiveVEs: 455,
    badge: null,
    theme: "orange",
    image: gemOrange,
  },
];

export const userBalance = { gems: 420, ves: 3850 };

export const recentConversions = [
  {
    id: "history-01",
    gems: 28,
    ves: 151,
    date: "26 Aug 2026 · 04:32 PM",
    status: "Completed",
    image: gemPurple,
  },
  {
    id: "history-02",
    gems: 39,
    ves: 168,
    date: "25 Aug 2026 · 11:15 AM",
    status: "Completed",
    image: gemBlue,
  },
  {
    id: "history-03",
    gems: 57,
    ves: 255,
    date: "23 Aug 2026 · 06:40 PM",
    status: "Completed",
    image: gemGreen,
  },
  {
    id: "history-04",
    gems: 25,
    ves: 112,
    date: "20 Aug 2026 · 09:10 AM",
    status: "Processing",
    image: gemOrange,
  },
  {
    id: "history-05",
    gems: 28,
    ves: 151,
    date: "19 Aug 2026 · 03:22 PM",
    status: "Failed",
    image: gemPurple,
  },
];

export const exchangeRules = [
  "Only eligible Gems can be exchanged.",
  "Exchange rates are predefined by VELOOP Rewards.",
  "Available conversions may vary.",
  "A successful conversion cannot be duplicated.",
  "Your balance is updated after successful conversion.",
  "Platform rules apply.",
];

export const howExchangeWorks = [
  {
    step: 1,
    title: "Earn Gems",
    description: "Complete eligible activities and earn Gems.",
    image: gemPurple,
    theme: "purple",
  },
  {
    step: 2,
    title: "Choose Conversion",
    description: "Select a conversion that suits your Gems balance.",
    icon: ListChecks,
    theme: "blue",
  },
  {
    step: 3,
    title: "Review Exchange",
    description: "Review the details before confirming the conversion.",
    icon: Search,
    theme: "teal",
  },
  {
    step: 4,
    title: "Confirm",
    description: "Confirm the exchange to convert your Gems.",
    icon: ShieldCheck,
    theme: "gold",
  },
  {
    step: 5,
    title: "Receive VEs",
    description: "VEs are added to your balance instantly.",
    image: veCoin,
    theme: "green",
  },
];

export const infoTooltip = {
  gems: {
    title: "What are Gems?",
    text: "Gems are reward credits earned through eligible activities on VELOOP Rewards.",
  },
  ves: {
    title: "What are VEs?",
    text: "VEs are VELOOP Rewards' virtual reward currency and may be used for eligible redemption options according to platform rules.",
  },
  exchangeRate: {
    title: "What is Exchange Rate?",
    text: "Each conversion has a fixed number of required Gems and a fixed number of VEs you receive. These values are set by VELOOP Rewards.",
  },
  exchangeRules: {
    title: "What are Exchange Rules?",
    text: "These rules explain how conversions work on VELOOP Rewards. Please read them before converting.",
  },
  howItWorks: {
    title: "How Exchange Works",
    text: "Follow these 5 simple steps to convert your earned Gems into VEs.",
  },
};

export const rulesImage = shieldImage;

export const veCoinImage = veCoin;
export const gemPurpleImage = gemPurple;

export const whatAreThese = [
  {
    id: 1,
    name: "Gems",
    text: infoTooltip.gems.text,
    image: gemPurple,
    theme: "purple",
    infoKey: "gems",
  },
  {
    id: 2,
    name: "VEs",
    text: infoTooltip.ves.text,
    image: veCoin,
    theme: "gold",
    infoKey: "ves",
  },
];

export const statusMessages = {
  loading: {
    message: "Preparing your reward conversions...",
  },
  empty: {
    title: "No conversions available right now.",
    message:
      "New reward conversion opportunities will appear here when available.",
  },
  error: {
    title: "Unable to load exchange options.",
    message: "Please try again.",
    actionLabel: "Retry",
  },
};

export const heroContent = {
  title: "Exchange Center",
  subtitle: "Turn Your Earned Gems into VEs",
  description:
    "Convert your eligible Gems into VEs and continue your reward journey.",
  image: heroImage,
};

export const rewardBanner = {
  title: "The more Gems you have, the better the rewards you unlock!",
  subtitle: "Keep earning and keep growing.",
  image: chestImage,
};

export const historyLabels = {
  title: "Recent Conversions",
  viewAll: "View All",
  viewFullHistory: "View Full History",
};

export const statusConfig = {
  Completed: { icon: Check },
  Processing: { icon: Clock },
  Failed: { icon: X },
};
