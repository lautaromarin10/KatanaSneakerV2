import CallToAction from "./components/CallToAction/CallToAction"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import ProductsList from "./components/ProductsList/ProductsList"
import YeezyList from "./components/ProductsList/YeezyList"
import Store from "./components/Store/Store"

function App() {

  return (
    <>
    <Header/>
     <Layout>
      <Hero/> 
      <Categories/>
      <ProductsList/>
      <CallToAction/>
      <YeezyList/>
      {/* <Store /> */}
     </Layout>
     <Footer/>
    </>
  )

}




export default App
