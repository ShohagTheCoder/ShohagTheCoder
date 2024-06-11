import Footer from "./global/footer";
import Header from "./global/header";
import Clients from "./sections/clients";
import Hero from "./sections/hero";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Clients />
            </main>
            <Footer />
        </>
    );
}
