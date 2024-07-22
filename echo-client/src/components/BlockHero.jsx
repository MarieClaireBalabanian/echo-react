import PropTypes from 'prop-types';
import GlobalImage from './GlobalImage';
import '../assets/styles/components/_BlockHero.scss';

const BlockHero = ({data }) => {
  return (
    <section className="block-hero">
      { data?.image?.url && <GlobalImage className="absolute-fill" imgClass="background-cover" image={ {url: data.image.url , alt: data?.image.alt}} /> }

      <div className="container">
        { data?.headline && <h2>{ data.headline }</h2> }
        { data?.copy && <p>{ data.copy }</p> }
      </div>
    </section>
  )
}

BlockHero.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlockHero;
