import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

import './styles.scss';

const SuggestionList = ({ userlist, loadHomeOrder, homeOrderList }) => {
  let serieType = 0;
  let userlistId = 0;
  let userlistSeasonNb = 0;
  let userlistEpisodeNb = 0;
  useEffect(() => {
    loadHomeOrder();
  }, []);
  return (
    <div className="suggestion-list">
      <p className="list-name">
        Vous pourriez aimer...
      </p>

      <Link to="/series" className="series-link">
        Voir notre catalogue de séries
      </Link>

      <div className="series-cards">
        {homeOrderList.map((serie) => {
          serieType = 0;
          userlistId = 0;
          userlistSeasonNb = 0;
          userlistEpisodeNb = 0;
            <>
              {userlist.forEach((userlistSerie) => {
                if (serie.id === userlistSerie.series.id) {
                  serieType = userlistSerie.type;
                  userlistId = userlistSerie.id;
                  userlistSeasonNb = userlistSerie.seasonNb;
                  userlistEpisodeNb = userlistSerie.episodeNb;
                }
              })}
            </>;
            return (
              serie.homeOrder >= 1
              && (
                <SeriesCard
                  key={serie.id}
                  isSuggestionsList
                  userlistId={userlistId}
                  currentSeason={userlistSeasonNb}
                  currentEpisode={userlistEpisodeNb}
                  type={serieType}
                  {...serie}
                />
              )
            );
        })}
      </div>
    </div>
  );
};

SuggestionList.propTypes = {
  homeOrderList: PropTypes.array.isRequired,
  loadHomeOrder: PropTypes.func.isRequired,
  userlist: PropTypes.array.isRequired,
};

export default SuggestionList;
