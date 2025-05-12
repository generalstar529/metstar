const URL = "https://metstarpei.com";
 
export default async function sitemap() {
  const routes = [
    "", 
    "/culture", 
    "/capabilities", 
    "/contact", 
    "/capabilities-catalog", 
    "/capabilities/electric-power", 
    "/capabilities/energy-efficiency", 
    "/capabilities/safety",
    "/capabilities/interior-remodeling",
    "/capabilities/exterior-remodeling",
    "/capabilities/restoration",
    "/capabilities/generators",
    "/capabilities/maintenance-subscriptions",
    "/culture/leadership",
    "/aboutus",
    "/diversity-inclusion"
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes];
}