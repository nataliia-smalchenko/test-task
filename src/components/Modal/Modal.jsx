import sprite from '../../images/sprite.svg';
import css from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleModal } from 'store/advertsSlice';
import Form from 'components/Form/Form';
import Feautures from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';

const Modal = props => {
  const dispatch = useDispatch();
  const [featuresReviewsToggle, setFeaturesReviewsToggle] =
    useState('features');

  document.documentElement.classList.add('no-scroll');

  const closeModal = evt => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.nodeName === 'svg' ||
      evt.target.nodeName === 'use'
    ) {
      document.documentElement.classList.remove('no-scroll');
      dispatch(toggleModal(''));
    }
  };

  const toggleFeatures = evt => {
    const reviews = document.querySelector('.js-reviews');
    reviews.classList.remove(css.checked);
    evt.target.classList.add(css.checked);
    setFeaturesReviewsToggle('features');
  };

  const toggleReviews = evt => {
    const features = document.querySelector('.js-features');
    features.classList.remove(css.checked);
    evt.target.classList.add(css.checked);
    setFeaturesReviewsToggle('reviews');
  };

  useEffect(() => {
    const features = document.querySelector('.js-features');
    features.classList.add(css.checked);

    const closeByEscape = evt => {
      if (evt.code === 'Escape') {
        document.documentElement.classList.remove('no-scroll');
        dispatch(toggleModal(''));
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [dispatch]);

  return (
    <div className={css.backdrop} onClick={closeModal}>
      <div className={css.modal}>
        <button className={css.close} onClick={closeModal}>
          <svg className={css.icon} width="32" height="32">
            <use href={sprite + '#icon-close'} />
          </svg>
        </button>

        <h2 className={css.title}>{props.item.name}</h2>
        <div className={css['loc-price-wrapper']}>
          <div className={css.tag}>
            <svg className={css.icon} width="16" height="16">
              <use href={sprite + '#icon-star'} />
            </svg>
            <span
              className={css.rating}
            >{`${props.item.rating} (${props.item.reviews.length} Reviews)`}</span>
          </div>
          <div className={css.tag}>
            <svg className={css.icon} width="16" height="16">
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <span>{props.item.location}</span>
          </div>
        </div>
        <p className={css.price}>{'€' + props.item.price.toFixed(2)}</p>

        <div className={css.scrolled}>
          <ul className={css.gallery}>
            <li>
              <img
                className={css.img}
                src={props.item.gallery[0] ?? '../../images/no-image.jpg'}
                alt=""
              />
            </li>
            <li>
              <img
                className={css.img}
                src={props.item.gallery[1] ?? '../../images/no-image.jpg'}
                alt=""
              />
            </li>
            <li>
              <img
                className={css.img}
                src={props.item.gallery[2] ?? '../../images/no-image.jpg'}
                alt=""
              />
            </li>
          </ul>
          <p className={css.descr}>{props.item.description}</p>
          <ul className={css['radio-list']}>
            <li>
              <label
                className={css['radio-label'] + ' js-features'}
                htmlFor="features"
                onClick={toggleFeatures}
              >
                <input
                  className={css.radio + ' visually-hidden'}
                  type="radio"
                  name="view"
                  id="features"
                  value="features"
                  onChange={toggleFeatures}
                  checked
                />
                Features
              </label>
            </li>
            <li>
              <label
                className={css['radio-label'] + ' js-reviews'}
                htmlFor="reviews"
                onClick={toggleReviews}
              >
                <input
                  className={css.radio + ' visually-hidden'}
                  type="radio"
                  name="view"
                  id="reviews"
                  value="reviews"
                  onChange={toggleReviews}
                />
                Reviews
              </label>
            </li>
          </ul>
          <hr className={css.line} />
          <div className={css['descr-wrapper']}>
            {featuresReviewsToggle === 'features' && (
              <Feautures item={props.item} />
            )}
            {featuresReviewsToggle === 'reviews' && (
              <Reviews list={props.item.reviews} />
            )}
            <Form> </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
