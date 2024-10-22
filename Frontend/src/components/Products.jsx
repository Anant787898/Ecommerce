import Product from "./Product";

function Products() {
  return (
    <div className="flex flex-wrap mx-[30px]">
      <Product img="/lotion.jpg" heading="hgffsdxf ytdff ygdyc yttyc gfcyc."/>
      <Product img="/lotion1.jpg" heading="hgffsdxf ytdff ygdyc yttyc gfcyc."/>
      <Product img="/lotion2.jpg" heading="hgffsdxf ytdff ygdyc yttyc gfcyc."/>
      <Product img="/serum1.jpg" heading="hgffsdxf ytdff ygdyc yttyc gfcyc."/>
      {/* <Product />
      <Product /> */}
    </div>
  );
}

export default Products;
