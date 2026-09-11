import { Button } from "@/components/atoms/Button";

export function SearchForm() {
  return (
    <form className="search-form" action="#sites">
      <label htmlFor="site-search">Search heritage sites</label>
      <div className="search-row">
        <input id="site-search" name="q" type="search" placeholder="Try “Bolinao”" />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}