export default function Header() {
	return (
		<>
			<div className="w-full h-[21.75rem] lg:h-[34.75rem] bg-[url('./assets/bg-header.jpg')] bg-cover bg-red-950/40 flex flex-row">
				<div className="w-full h-[34.75rem] bg-cover bg-[#cacccf]/10 flex flex-row">
					<div className="text-white p-4 pt-10 sm:p-20 , w-[50rem]">
						<h1 className="font-bold text-4xl sm:text-4xl xl:text-7xl">Ambil Kendali</h1>
						<h1 className="font-bold text-4xl sm:text-4xl xl:text-7xl">Masa Depanmu</h1>
						<p className="text-base sm:text-xl , mt-4">Kampus Merdeka adalah cara terbaik berkuliah.</p>
						<p className="text-base sm:text-xl">Dapatkan kemerdekaan untuk membentuk masa depan yang sesuai dengan aspirasi kariermu.</p>
						<button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 w-full rounded-2xl mt-5 sm:w-64 sm:py-2 sm:mt-2 xl:py-3">Telusuri Program</button>
						<button className="bg-white hover:bg-blue-800 text-black font-bold py-2 w-full rounded-2xl mt-3 sm:w-64 sm:py-2 xl:py-3 xl:ml-2">Cek Persyaratan Umum</button>
					</div>
				</div>
			</div>
		</>
	);
}
