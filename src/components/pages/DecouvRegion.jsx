import './DecouvRegion.css';

export function DecReg() {
    return (
        <div>
            <div 
            // className='essai'
            >
                <h1>Découvrez la région aux alentours !</h1>
                <h4>
                    Quelles sont les attractions qui vont feront envie ?
                </h4>
            </div>
            <div className='background'>
                <p>Cliquez sur une image pour en savoir plus</p>
            </div>
            <div className='panel'>
                <img src="./img/WhatsApp Image 2024-04-04 à 16.33.09_a3769a51.jpg" alt="Le château de Bournazel" />
                <img src="./img/Cransac2.jpg" alt="Les thermes de Cransac" />
            </div>
        </div>
    )
}