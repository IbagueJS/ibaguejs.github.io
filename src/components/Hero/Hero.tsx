import './Hero.scss'

export const Hero = () => {
  return (
    <section id="who-we-are" className="hero">
      <div className="hero-text">
        <h1 className="hero-text-title">
          IBAGUÉJS la comunidad de desarrolladores de JavaScript en Ibagué
        </h1>
        <p className="hero-text-p">
          Únete a nosotros y aprende en comunidad. IbaguéJS es un espacio
          gratuito y abierto para aprender y compartir conocimientos sobre
          JavaScript. Como miembros de IbaguéJS, nos comprometemos a seguir un
          Código de Conducta que se aplica a los integrantes, asistentes,
          patrocinadores y organizadores del grupo. Este código tiene como
          objetivo crear un ambiente inclusivo y libre de acoso. Al unirte a
          nuestro grupo, aceptas nuestros términos y condiciones.
        </p>
        <p className="hero-text-p">
          En IbaguéJS, creemos en mantener un ambiente informal y acogedor.
          Cualquier colaboración, en cualquier sentido, será bienvenida y
          apreciada. ¡Te esperamos!
        </p>
      </div>
      <div className="hero-image">
        <img src="ibaguejs-hero.webp" alt="" width={352} height={417} />
      </div>
    </section>
  )
}
