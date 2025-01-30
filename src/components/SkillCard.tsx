interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

export function SkillCard({ icon, title, description, technologies }: SkillCardProps) {
  return (
    // <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl glow transition-all duration-300 hover:scale-[1.02]">
    //   <div className="text-primary-500 mb-4 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
    //   <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
    //   <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    //   <div className="flex flex-wrap gap-2">
    //     {technologies.map((tech) => (
    //       <span
    //         key={tech}
    //         className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
    //       >
    //         {tech}
    //       </span>
    //     ))}
    //   </div>
    // </div>

    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl glow transition-all duration-300 hover:scale-[1.02] max-w-[350px] mx-auto">
      <div className="text-primary-500 mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    // This is Nishant





  );
}