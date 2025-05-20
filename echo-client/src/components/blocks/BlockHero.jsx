import PropTypes from 'prop-types';
import GlobalImage from '../global/GlobalImage';
import '../../assets/styles/components/_BlockHero.scss';

const BlockHero = ({data }) => {
  return (
    <section className="block-hero bg-charcoal text-white relative">
      { data?.image?.url && <GlobalImage className="" imgClass="img-contain" image={ {url: data.image.url , alt: data?.image.alt}} /> }

      <div className="container">
        { data?.headline && <h2 className="h2">{ data.headline }</h2> }
        { data?.copy && <p>{ data.copy }</p> }
      </div>
    </section>
  )
}

BlockHero.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlockHero;
