import { useState } from "react";
import { categories, technologies, languages } from "../../constants";
import { filter } from "../../store";

interface FilterProps {
  section: "projects" | "jobs";
}

export default function Filter(props: FilterProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = {
      category: data.get("category") as string,
      technologies: data.getAll("technologies") as string[],
      languages: data.get("language") as string,
    };
    filter(props.section, obj);
  };
  return (
    <div>
      <button
        className="p-2 border-border border-4 bg-bg rounded-full absolute md:top-8 md:right-28 top-6 right-[7%]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          className="w-6 h-6 text-white/75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"></path>
        </svg>
      </button>
      <dialog
        className="absolute top-0 left-0 z-50 text-white w-full h-full flex items-center justify-center bg-transparent"
        style={{ display: open ? "flex" : "none" }}
      >
        <div
          className="bg-black/50 absolute top-0 left-0 w-full h-full z-0"
          onClick={() => setOpen(false)}
        />
        <div className="bg-gradient-to-br from-gradient-vex-green to-gradient-vex-purple rounded-lg p-1 max-w-xl w-10/12 relative z-10">
          <form
            className="flex flex-col items-center bg-bg rounded-md py-2 px-4 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between w-full mb-8">
              <h2 className="font-bold">Filter</h2>
              <button onClick={() => setOpen(false)}>
                <svg
                  className="w-6 h-6 text-white/75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label htmlFor="category" className="font-medium">
                Categoría
              </label>
              <select
                name="category"
                id="category"
                className="w-full rounded-md border-border border-2 p-1 bg-bg"
              >
                <option value="">All</option>
                {categories.map((cat) => (
                  <option key={cat + "_" + props.section} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <p className="font-medium w-full mb-2">Tecnologías</p>
            <div className="flex flex-wrap gap-4 md:gap-8 mb-4">
              {technologies.map((tech) => (
                <div
                  className="flex items-center"
                  key={tech + "_" + props.section}
                >
                  <input
                    type="checkbox"
                    name="technologies"
                    id={tech + "_" + props.section}
                    value={tech}
                    className="mr-1 bg-bg accent-gradient-vex-green w-4 h-4"
                  />
                  <label htmlFor={tech + "_" + props.section}>{tech}</label>
                </div>
              ))}
            </div>
            <div className="w-full mb-2 flex justify-between items-center gap-20">
              <label htmlFor="language" className="font-medium">
                Lenguaje
              </label>
              <select
                name="language"
                id="language"
                className="w-full rounded-md border-border border-2 p-1 bg-bg"
              >
                <option value="">All</option>
                {languages.map((lang) => (
                  <option key={lang + "_" + props.section} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="bg-white text-black p-2 rounded-md w-full mt-8 mb-1 font-bold"
              type="submit"
            >
              Filtrar
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
