import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 style={{fontSize: '36px', fontWeight: 500, width: '100%', textAlign: 'center', margin: '20px 0', color: '#e1f1fd'}}>Jónsson Orðla</h2>
        <div className="flex gap-6 flex-wrap items-center justify-center" style={{position: "sticky"}}>
          <a className={`navigation active`} href="/name-game">Leikreglur</a>
          <a className={`navigation `}  href="/name-game/name/first">Fornafn</a>
          <a className={`navigation `} href="/name-game/name/second">Millinafn</a>
       </div>
       <div style={{alignSelf: 'start', maxWidth: '600px', fontSize: '18px'}}>
        <div style={{textAlign: 'center', fontSize: '22px'}}>
          <b>Hvernig á að spila</b>
        </div>
        <ul>
          <li>Giskaðu á nafnið</li>
          <li>Hvert gisk þarf að vera gilt 5-stafa nafn</li>
          <li>Litir reitanna munu breytast til að sýna hversu nálægt gisk þitt var nafninu</li>
        </ul>
        <div style={{textAlign: 'center', fontSize: '22px'}}>
          <b>Dæmi</b>
        </div>
        <div>
Ef giskað er á nafnið:VALDI
</div>
<div>
<input value={'V'} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: '#ccc',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",
                }}></input>
                <input value={'A'} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: '#ccc',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",
                }}></input>
                <input value={'L'} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: 'green',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",
                }}></input>
                <input value={'D'} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: '#ccc',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",
                }}></input>
                <input value={'I'} style={{
                    justifyContent: 'space-between',
                    width: '45px',
                    height: '45px',
                    margin: '5px',
                    backgroundColor: 'yellow',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontSize: '34px',
                    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial sans-serif",
                }}></input>
                </div>
<div>&quot;L&quot; er í nafninu og á réttri stað.  </div>

<div>&quot;I&quot; er í nafninu en á röngum stað.  </div>

<div>Restin er ekki í nafninu.</div>
        </div>
        <ToastContainer />
       </div>
      </body>
  );
}