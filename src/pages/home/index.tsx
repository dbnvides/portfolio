// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project, ProjectDeploy } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  HeaderImage,
  HeaderDescription,
  SectionMe,
  PlusMoreProjects,
} from "./style";
import { FaGithub } from "react-icons/fa";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <SectionMe>
              <HeaderImage>
                <img src="src/assets/person.png" alt="img" />
              </HeaderImage>
              <HeaderDescription>
                <Text as="h2" type="heading2" color="grey5">
                  Olá sou o Dionísio, e seja muito bem vindo(a)!
                </Text>
                <Text type="body1" color="grey6">
                  Sou desenvolvedor full stack, este é o meu portfólio, onde você pode explorar
                  todos os projetos que já realizei e estou desenvolvendo. Sinta-se à vontade para
                  navegar e conhecer meu trabalho. Estou ansioso para compartilhar minhas
                  habilidades e experiências com você. Puxe uma cadeira e aproveite!
                </Text>
              </HeaderDescription>
            </SectionMe>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos" type="icon">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey5">
            Tecnologias
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey5">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey5">
                No LinkedIn, ainda não compartilhei os projetos dos quais fiz parte, mas em breve
                pretendo apresentar novos projetos que oferecem soluções para o dia a dia. Estou
                sempre disponível para conversar e trocar ideias.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="heading2" color="grey5" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <ProjectDeploy />
              <Text type="heading2" color="grey5" css={{ marginBottom: "$2" }}>
                Projetos no repositório
              </Text>
              <Project />
              <PlusMoreProjects>
                <Text type="heading2" color="grey5" css={{ marginBottom: "$2" }}>
                  Ver mais
                </Text>
                <Button
                  type="icon"
                  target="_blank"
                  as="a"
                  aria-label="Github"
                  href={`https://github.com/${userData.githubUser}`}
                >
                  <FaGithub />
                </Button>
              </PlusMoreProjects>
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
