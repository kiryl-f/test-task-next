import React from 'react';
import styles from '../styles/OfferSection.module.scss';
import Image from 'next/image';

const OfferSection = () => {
  const offers = [
    {
      title: 'Барнхаусы',
      image: '/images/barnhouse.jpg',
      altText: 'Barnhouse Image',
      description: 'Оформление рассрочки по ставке от 15% годовых',
      link: '/barnhouses',
    },
    {
      title: 'Title 2',
      image: '/images/placeholder.jpg', 
      altText: 'Placeholder Image',
      description: 'Description 2',
      link: '/link2',
    },
    {
      title: 'Таунхаусы',
      image: '/images/townhouse.jpg',
      altText: 'Townhouse Image',
      description: 'Скидка до 5% при полной предоплате за проект',
      link: '/townhouses',
    },
        {
      title: 'Title 4',
      image: '/images/placeholder.jpg', // Placeholder Image
      altText: 'Placeholder Image',
      description: 'Description 4',
      link: '/link4',
    },
  ];

  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offer}>
             <div className={styles.imageWrapper}>
              <Image
                src={offer.image}
                alt={offer.altText}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                priority={index < 4 ? true : false}
              />
            </div>
            <div className={styles.offerContent}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <a href={offer.link} className={styles.detailsLink}>
                Подробнее &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;