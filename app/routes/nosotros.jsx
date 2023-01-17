import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
export function meta(){
    return(
        {
            title: 'GuitarraLA - Sobre Nosotros',
            description:'Venta de guitarras,blog de música'
        }
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as:'image'
        },
    ]

}

function Nosotros() {
    return (
      <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src ={imagen} alt="imagen sobre nosotros" />
        <div>
            <p>Duis ultricies commodo nunc. Phasellus a sagittis felis, sit amet volutpat nulla.
             Donec eu vestibulum neque. Mauris iaculis nunc eget mauris fringilla, vitae viverra
            purus tincidunt. Aenean tempus velit a justo posuere, at efficitur orci eleifend.
             Mauris eget dui in ipsum ultrices facilisis vel ac massa. Donec mollis magna metus,
              non ultrices lorem convallis sed.
               </p>

                   <p>Duis ultricies commodo nunc. Phasellus a sagittis felis, sit amet volutpat nulla.
             Donec eu vestibulum neque. Mauris iaculis nunc eget mauris fringilla, vitae viverra
            purus tincidunt. Aenean tempus velit a justo posuere, at efficitur orci eleifend.
             Mauris eget dui in ipsum ultrices facilisis vel ac massa. Donec mollis magna metus,
              non ultrices lorem convallis sed. 
               </p>
        </div>
      </div>
      </main>
    )
  }
  
  export default Nosotros