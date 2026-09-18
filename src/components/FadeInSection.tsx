import { motion } from "motion/react";

/** Layout-neutral reveal wrapper: only animates, never dictates layout. */
export default function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full min-w-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}
