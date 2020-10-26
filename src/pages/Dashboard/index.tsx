/* eslint-disable no-use-before-define */
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImage from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/67002731?s=460&u=6f5d7e06045169437dea4e0ccd11aa478098ff1b&v=4"
            alt="Guilherme Filenga"
          />
          <div>
            <strong>primeiro-projeto-react</strong>
            <p>ReactJS + Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/67002731?s=460&u=6f5d7e06045169437dea4e0ccd11aa478098ff1b&v=4"
            alt="Guilherme Filenga"
          />
          <div>
            <strong>primeiro-projeto-react</strong>
            <p>ReactJS + Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/67002731?s=460&u=6f5d7e06045169437dea4e0ccd11aa478098ff1b&v=4"
            alt="Guilherme Filenga"
          />
          <div>
            <strong>primeiro-projeto-react</strong>
            <p>ReactJS + Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
