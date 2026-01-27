import styles from "./style.module.css";

const Contato = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xjggrqwo", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Ops! Houve um erro ao enviar.");
    }
  };

  return (
    <section className={styles.contato} id="contato">
      <h2 className={styles.heading}>
        Entre em <span>Contato!</span>
      </h2>

      <p className={styles.subtitulo}>
        Sinta-se à vontade para entrar em contato sobre propostas ou dúvidas
        técnicas.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <p>Nome:</p>
          <input type="text" name="name"  required />
          <p>Email:</p>
          <input type="email" name="email"  required />
        </div>
        <p>Sua mensagem:</p>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Deixe seu recado aqui..."
          required
        ></textarea>
        <input type="submit" value="Enviar" className={styles.btn} />
      </form>
    </section>
  );
};

export default Contato;
