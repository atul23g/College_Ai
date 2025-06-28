import { redirect } from 'next/navigation';
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";

const PresentationPage = () => {
  redirect('/dashboard')
}

export default PresentationPage