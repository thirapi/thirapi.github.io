import { motion } from "motion/react";

export default function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-h-screen w-full min-w-0 items-center overflow-hidden ${className}`}>
      <motion.section
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex w-full min-w-0 flex-col items-start p-4 md:pt-0"
      >
        {children}
      </motion.section>
    </div>
  );
}
