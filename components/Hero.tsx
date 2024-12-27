export default function Hero() {
	return (
		<div className="hero pt-28 md:pt-48 min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-6xl mx-auto pb-12 md:pb-24">
					<h1
						className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
						data-aos="zoom-y-out"
					>
						We help to run{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400">
							blockchain
						</span>{" "}
						networks
					</h1>
					<div className="max-w-3xl mx-auto">
						<p
							className="text-xl text-gray-600 mb-8"
							data-aos="zoom-y-out"
							data-aos-delay="150"
						>
							Our reliable infrastructure can help you enhance your staking
							rewards.
						</p>
					</div>
					<div
						className="mx-auto max-w-none flex justify-center pt-10 md:pt-32"
						data-aos="zoom-y-out"
						data-aos-delay="300"
					>
						<div className="arrow">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
