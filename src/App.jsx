import Hero from "./section/Hero";
import PopularProducts from "./section/PopularProducts";
import SuperQuality from "./section/SuperQuality";
import Services from "./section/Services";
import SpecialOffer from "./section/SpecialOffer"
import CustomerReviews from "./section/CustomerReviews.jsx"
import Subscribe from "./section/Subscribe"
import Footer from "./section/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero></Hero>
      </section>
      <section className='padding'>
        <PopularProducts></PopularProducts>
      </section>
      <section className='padding'>
        <SuperQuality></SuperQuality>
      </section>
      <section className='padding-x py-10'>
        <Services></Services>
      </section>
      <section className='padding'>
        <SpecialOffer></SpecialOffer>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews></CustomerReviews>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe></Subscribe>
      </section>
      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer></Footer>
      </section>
    </main>
    
  );
}

export default App;
