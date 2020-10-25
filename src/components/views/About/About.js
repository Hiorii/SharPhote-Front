import React from 'react';
import styles from './About.scss';
import globalStyle from '../../../styles/global.scss';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={globalStyle.sectionTitle}>o nas</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores excepturi exercitationem harum id illum inventore, ipsam labore laboriosam, nobis omnis pariatur porro unde! Aliquid aspernatur at consectetur, consequuntur dicta explicabo fugit harum incidunt itaque labore magnam maiores mollitia nam nihil nisi officia placeat quisquam veritatis vero voluptate. Delectus dolores eligendi labore, quod sequi vel. Dicta eum necessitatibus nostrum vel? Accusamus consectetur distinctio dolorem dolores et laudantium, omnis praesentium, quibusdam quidem rem saepe ullam voluptatibus? Aliquid architecto asperiores at blanditiis dolor dolore eius et iusto magni minima, molestiae molestias numquam odit optio possimus provident quia repudiandae totam ullam velit voluptate.
      </p>
    </section>
  );
}
