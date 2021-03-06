// == Import
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';
import Loading from '../Loading';

import './styles.scss';

const Details = ({
  isConnected,
  type,
  userlistId,
  userlistSeasonNb,
  userlistEpisodeNb,
  findSerieInUserlist,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
  openLoginForm,
}) => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentSeriesDetails, setCurrentSeriesDetails] = useState({});
  useEffect(() => {
    axios.get(`http://backoffice-keskonmate.me/api/v1/series/${slug}`)
      .then((response) => {
        setCurrentSeriesDetails(response.data);

        findSerieInUserlist(slug);
        setIsLoading(false);
      })
      .catch(() => {
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="detail-container">
      {isLoading && <Loading />}
      {!isLoading && (
      <>
        <div className="banner-container">
          <img className="poster" src={currentSeriesDetails.image} alt="" />
          <div className="banner-text">
            <h1 className="series-title">{currentSeriesDetails.title}</h1>
            {!isConnected
            && (
            <button
              className="connection-button"
              type="button"
              onClick={() => {
                openLoginForm();
              }}
            >
              Connecte-toi
            </button>
            )}
            {isConnected
            && (type === 1)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    editSerieToApiUserlist(userlistId, 3, userlistSeasonNb, userlistEpisodeNb);
                  }}
                >
                  Déplacer vers ma liste [à voir]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    editSerieToApiUserlist(userlistId, 0, userlistSeasonNb, userlistEpisodeNb);
                  }}
                >
                  Supprimer de ma liste [déjà vu]
                </a>
              </div>
            )}
            {isConnected
            && (type === 2)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    editSerieToApiUserlist(userlistId, 1, userlistSeasonNb, userlistEpisodeNb);
                  }}
                >
                  Déplacer vers ma liste [déjà vu]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    editSerieToApiUserlist(userlistId, 0, userlistSeasonNb, userlistEpisodeNb);
                  }}
                >
                  Supprimer de ma liste [en cours]
                </a>
              </div>
            )}
            {isConnected
            && (type === 3)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    editSerieToApiUserlist(userlistId, 2, userlistSeasonNb, userlistEpisodeNb);
                  }}
                >
                  Déplacer vers ma liste [en cours]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    editSerieToApiUserlist(userlistId, 0, userlistSeasonNb, userlistEpisodeNb);
                  }}
                >
                  Supprimer de ma liste [à voir]
                </a>
              </div>
            )}
            {isConnected
            && (type === 0)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    addSerieToApiUserlist(
                      slug,
                      currentSeriesDetails.title,
                      currentSeriesDetails.image,
                      1,
                    );
                  }}
                >
                  Ajouter à ma liste [déjà vu]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    addSerieToApiUserlist(
                      slug,
                      currentSeriesDetails.title,
                      currentSeriesDetails.image,
                      2,
                    );
                  }}
                >
                  Ajouter à ma liste [en cours]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    addSerieToApiUserlist(
                      slug,
                      currentSeriesDetails.title,
                      currentSeriesDetails.image,
                      3,
                    );
                  }}
                >
                  Ajouter à ma liste [à voir]
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="genre-list">
          <ul className="ul-genre">
            {currentSeriesDetails.genre.map((genre) => (
              <li className="li-genre" key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>

        <div className="resume">
          <h3>Résumé</h3>
          <p>{currentSeriesDetails.synopsis}</p>
        </div>

        <div className="seasons-container">
          <h3>Nombre de saisons : {currentSeriesDetails.season.length} </h3>
        </div>

        <div className="actors-container">
          <h3>Acteurs Principaux</h3>
          <ul className="ul-actors">
            {currentSeriesDetails.actor.map((actor) => (
              <li className="li-actors" key={actor.id}>
                <Card className="actor-card">
                  {actor.image === ''
                  && (
                    <Image
                      className="actor-card-image"
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    />
                  )}
                  <Image src={actor.image} />
                  <Card.Content>
                    <Card.Header className="actor-name">{actor.name}</Card.Header>
                  </Card.Content>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </>
      )}
    </div>
  );
};
Details.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  findSerieInUserlist: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
  userlistId: PropTypes.number,
  userlistSeasonNb: PropTypes.number,
  userlistEpisodeNb: PropTypes.number,
  addSerieToApiUserlist: PropTypes.func,
  editSerieToApiUserlist: PropTypes.func,
  openLoginForm: PropTypes.func.isRequired,

};

Details.defaultProps = {
  userlistId: 0,
  userlistSeasonNb: 0,
  userlistEpisodeNb: 0,
  addSerieToApiUserlist: () => {},
  editSerieToApiUserlist: () => {},
};

export default Details;
