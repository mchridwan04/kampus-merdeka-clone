export default function header() {
      return (
            <>
                  <div className="w-full h-[34.75rem] bg-[url('./assets/bg-header.jpg')] bg-cover bg-red-950/40 flex flex-row">
                        <div className="w-full h-[34.75rem] bg-cover bg-[#cacccf]/10 flex flex-row">
                              <div className="p-36 text-white">
                                    <h1 className="text-7xl font-bold">Ambil Kendali</h1>
                                    <h1 className="text-7xl font-bold">Masa Depanmu</h1>
                                    <p className="text-xl mt-3">Kampus Merdeka adalah cara terbaik berkuliah.</p>
                                    <p className="text-xl">Dapatkan kemerdekaan untuk membentuk masa depan yang</p>
                                    <p className="text-xl">sesuai dengan aspirasi kariermu.</p>
                                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-14 rounded-2xl mt-5">Telusuri Program</button>
                                    <button className="bg-white hover:bg-blue-800 text-black font-bold py-3 px-12 rounded-2xl mt-5 ml-3">Cek Persyaratan Umun</button>
                              </div>
                        </div>
                  </div>
            </>
      )
}