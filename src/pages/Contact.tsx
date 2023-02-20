import { useForm, ValidationError } from '@formspree/react';

import Base from '../components/Base';
import styles from '../styles/Contact.module.scss';


export default function Work() {
    const [state, handleSubmit] = useForm("xbjeogvp");

    if (state.succeeded) {
      return <p>Thanks for countacting me!</p>;
  }
    return (
      <Base>
        <form
          onSubmit={handleSubmit}
          className={styles.formContact}
        >
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Want to Chat?</legend>
          <p>Fill out this form</p>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className={styles.input}
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div>
            <input name="email" type="email" placeholder="Email" className={styles.input} />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              className={`${styles.input} ${styles.textarea}`}
            >
            </textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
        </fieldset>
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.submit}
        >
          Submit
        </button>
      </form>
      </Base>
    );
}
