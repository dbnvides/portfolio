import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  ProjectImage,
  ProjectCard,
  ProjectContent,
  ProjectAreaButtons,
  ProjectLinkDeploy,
} from "./style";

import JuniorJobs from "../../assets/juniorJobs.png";
import KenzieHub from "../../assets/KenzieHub.png";
import Hamburgueria from "../../assets/hamburgueria.png";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
  html_url: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      let recent = json.slice(0, 10);
      setRepositories(recent);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <Text as="h2" type="heading3" css={{ marginBottom: "$3" }} color="grey5">
            {repository.name}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text type="body2" color="grey5">
                Linguagem:
              </Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}

          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.html_url}>
              <FaGithub /> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};

export const ProjectDeploy = (): JSX.Element => {
  return (
    <>
      <ProjectCard>
        <ProjectImage>
          <img src={JuniorJobs} alt="imagem do site" />
        </ProjectImage>
        <ProjectContent>
          <h3>Junior Jobs</h3>
          <p>
            A aplicação acima tem como objetivo facilitar essa busca, tanto para novos
            desenvolvedores quanto para empresas buscando novos colaboradores.{" "}
          </p>
          <ProjectAreaButtons>
            <ProjectLinkDeploy target="_blank" href="https://junior-jobs-eta.vercel.app/">
              Aplicação
            </ProjectLinkDeploy>
            <ProjectLink target="_blank" href="https://github.com/Project-Junior-Jobs/Junior-jobs">
              <FaGithub />
              Repositório
            </ProjectLink>
          </ProjectAreaButtons>
        </ProjectContent>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage>
          <img src={KenzieHub} alt="imagem do site" />
        </ProjectImage>
        <ProjectContent>
          <h3>KenzieHub</h3>
          <p>
            Aplicação voltada para desenvolvedores cujo o principal objetivo é anotar quais
            tecnologias voce tem conhecimento e colocar qual o grau de conhecimento.{" "}
          </p>
          <ProjectAreaButtons>
            <ProjectLinkDeploy target="_blank" href="https://react-kenziehub.vercel.app/login">
              Aplicação
            </ProjectLinkDeploy>
            <ProjectLink target="_blank" href="https://github.com/Project-Junior-Jobs/Junior-jobs">
              <FaGithub />
              Repositório
            </ProjectLink>
          </ProjectAreaButtons>
        </ProjectContent>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage>
          <img src={Hamburgueria} alt="imagem do site" />
        </ProjectImage>
        <ProjectContent>
          <h3>Hamburgueria</h3>
          <p>
            Aplicação voltado para compras de lanches e acompanhamentos, com sistemas de login e
            registro, sistema de carrinho e filtro para buscar os lanches, totalmente responsivo.{" "}
          </p>
          <ProjectAreaButtons>
            <ProjectLinkDeploy
              target="_blank"
              href="https://hamburgueria-2-0-azure.vercel.app/login"
            >
              Aplicação
            </ProjectLinkDeploy>
            <ProjectLink target="_blank" href="https://github.com/dbnvides/react-hamburgueria-v2">
              <FaGithub />
              Repositório
            </ProjectLink>
          </ProjectAreaButtons>
        </ProjectContent>
      </ProjectCard>
    </>
  );
};
