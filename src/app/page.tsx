import Link from "next/link";
// import styles from "./page.module.css";
import Image from "next/image";

export default function Home() { 
  return (
    <div className={styles.page}>
      <Image src={"/hero.png"} alt="Wateja hero" width={200} height={200} />
      <h1>Bienvenu dans nextjs</h1>
      <Link href="/contacts" className="btn-link">Vister notre application</Link>
    </div>
  );
}

