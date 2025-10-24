import { redirect } from "next/navigation";

export default function Index() {
  // Default to English. Users can switch to zh-Hant/zh-Hans via the switcher.
  redirect("/en");
}

