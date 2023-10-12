import { IQuote } from '@/models';
import { parseText } from '@/utils/helpers';
import styles from './styles.module.css'

const HomeQuote = ({data}: {data: IQuote}) => {
  const quote = data?.text;
  const { normalTitle, italicTitle, remainingTitle } = parseText(quote);
  return (
    <section className={styles.homeQuote}>
      <p>
        {normalTitle}<i>{italicTitle}</i>{remainingTitle}
      </p>
    </section>
  );
};

export default HomeQuote;
