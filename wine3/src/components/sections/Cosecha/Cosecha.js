import React from 'react';
import './Cosecha.css';


const Cosecha = () => {
	return (
		<>


			<div class="vinos">

				<div class="box">

					<h2 class="vino">Syrah</h2>

					<h4 class="subtitulo">De la tierra del sol y el buen vino</h4>

					<div class="btn-1">
						<button>+ info</button>
					</div>
					<div>
						<img class="img-vino" src={require('../../../assets/Syrah.jpeg')} alt="Syrah" width="300px" />
					</div>
					<div class="btn-2">
						<a target="blank" href="#"><button>Vint Syrah</button></a>
					</div>

				</div>


				<div class="box">

					<h2 class="vino">Pinot Noir</h2>

					<h4 class="subtitulo">De la tierra del sol y el buen vino</h4>

					<div class="btn-1">
						<button>+ info</button>
					</div>
					<div>
						<img class="img-vino" src={require('../../../assets/Pinot Noir.jpeg')} alt="Pinot Noir" width="300px" />
					</div>
					<div class="btn-2">
						<a target="_blank" href="#"><button>Vint Pinot Noir</button></a>
					</div>

				</div>


				<div class="box">

					<h2 class="vino">Blend</h2>

					<h4 class="subtitulo">De la tierra del sol y el buen vino</h4>

					<div class="btn-1">
						<button>+ info</button>
					</div>
					<div>
						<img class="img-vino" src={require('../../../assets/Blend.jpeg')} alt="Blend" width="300px" />
					</div>
					<div class="btn-2">
						<a target="_blank" href="#"><button>Vint Blend</button></a>
					</div>
				</div>

			</div>

{/* codigo de escritorio */}

			<div class="escritorio">

				<div class="cosecha-titulo">
					<h2 class="cosecha">Conocé y disfrutá</h2>
					<h4 class="cosecha-sub">Aquí podrás informarte en detalle acerca de las características de cada NFT y
						acceder <br />
						a los productos más exclusivos de Elefante Wine
					</h4>
				</div>

				<div class="info-vino">
					<div class="seccion">
						<div class="nombre-botella">
							<h3 class="varietal">Syrah</h3>
							<img class="img-vino" src={require('../../../assets/Syrah.jpeg')} alt="Syrah" />
						</div>

						<div class="descripcion">
							<h5>Vinificación y crianza:</h5>
							<p>Uva despalillada, macero en frío y luego fermento de racimo en tanque de acero inoxidable con
								trabajos de pigeage, hizo una corta maceración post fermentativa. Se conservó durante 1 año en
								tanque de acero inoxidable (2020). Se crió durante 12 meses en barrica de roble francés de 5
								usos(2021), fueron 2 barricas, 600 botellas.
							</p>
							<br />
							<br />

							<h5>Notas de cata:</h5>
							<p>En nariz se presenta compacto con una primera impresión de cuero, tabaco y pimienta. Luego
								aparecen
								aromas a sotobosque, hongos de pino, higos y ciruela tiernizada.
								En boca ingresa con volumen e intensida, su alto alcohol se percibe en la densidad, pero estta
								integrado y amable, “dulce”. Los taninos son suaves con una gran largo de boca. Un vino con un
								interesante potencial de guarda.
							</p>
							<br />
							<br />

							<h5>Características del NFT</h5>
							<p class="nft">Year: 2020 | Country: Argentina | Region: Pedernal | Alcohol: 15.5 | pH: 3.55 | Ageing potential:
								10
								years
							</p>

							<div class="btn-3">
								<a target="_blank" href="#"><button>VINT Syrah</button></a>
							</div>
						</div>
					</div>

					<hr />

					<div class="seccion">
						<div class="nombre-botella">
							<h3 class="varietal">Pinot Noir</h3>
							<img class="img-vino" src={require('../../../assets/Pinot Noir.jpeg')} alt="Pinot Noir" width="300px" />
						</div>

						<div class="descripcion">
							<h5>Vinificación y crianza:</h5>
							<p> Fermento con 15% de racimo entero en tanque de acero inoxidable “oper top” con mucho pigage, se
								prensó apenas terminó la fermentación. Se embarricó con borras finas. Se crió durante 12 meses
								en
								barrica de roble francés de 5 usos, 3 barricas, 900 botellas.
							</p>
							<br />
							<br />

							<h5>Notas de cata:</h5>
							<p>En nariz se presenta complejo con una nota inicial de crianza a vainilla, resina y tabaco fresco.
								Luego con un poco de aire aparecen notas a canela, clavo de olor y cerezas.
								En boca ingresa con volumen con una acidez creciente, taninos suaves que invitan a dejar el vino
								en
								boca.
								Final agradable con interesante persistencia aromática. Presenta sedimentos.
							</p>
							<br />
							<br />

							<h5>Características del NFT</h5>
							<p class="nft">Year: 2021 | Country: Argentina | Region: Pedernal | Alcohol: 12.8 | pH: 3.3 | Ageing potential:
								7
								years
							</p>

							<div class="btn-3">
								<a target="_blank" href="#"><button>VINT Pinot Noir</button></a>
							</div>
						</div>
					</div>

					<hr />

					<div class="seccion">
						<div class="nombre-botella">
							<h3 class="varietal">Blend</h3>
							<img class="img-vino" src={require('../../../assets/Blend.jpeg')} alt="Blend" width="300px" />
						</div>

						<div class="descripcion">
							<h5>Vinificación y crianza:</h5>
							<p>Uvas provenientes de viñedo de mas de 20 años, fermentación en tanque de acero inoxidable. Se
								crió,
								por separado, durante 12 meses en barrica de roble francés de 4 usos, 3 barricas, 900 botellas.
							</p>
							<br />
							<br />

							<h5>Notas de cata:</h5>
							<p>En nariz se presenta complejo con una primera impresión de fruta negray pimiento. Luego aparece
								frutilla y ciruela, también hay notas de crianza a tabaco y café.
								En boca ingresa con una acidez punzante y taninos con agarre, es intenso y vivaz, en los
								retrogustos
								aparecen las frutas negras y frambuesas. Un vino con un largo potencial de guarda.
							</p>
							<br />
							<br />

							<h5>Características del NFT</h5>
							<p class="nft">Year: 2021 | Country: Argentina | Region: Pedernal | Alcohol: 14.2 | pH: 3.4 | Ageing potential:
								12 years</p>

							<div class="btn-3">
								<a target="_blank" href="#"><button>VINT Blend</button></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}
export default Cosecha;
