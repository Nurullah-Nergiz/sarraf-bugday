import Nav from "../Nav";

export default function Header() {
   return (
      <header className="border-b border-current">
         <section className="container mx-auto p-4 flex items-center justify-between">
            <div className="font-bold">logo</div>
            <Nav />
            
         </section>
      </header>
   );
}