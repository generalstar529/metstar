const URL = "https://metstarpei.com";

export default async function sitemap() {
  const routes = [
    "",
    "/culture",
    "/culture/leadership",
    "/capabilities",
    "/capabilities-catalog",
    "/capabilities/electric-power",
    "/capabilities/energy-efficiency",
    "/capabilities/safety",
    "/capabilities/interior-remodeling",
    "/capabilities/exterior-remodeling",
    "/capabilities/restoration",
    "/capabilities/generators",
    "/capabilities/maintenance-subscriptions",
    "/contact",
    "/aboutus",
    "/diversity-inclusion",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
