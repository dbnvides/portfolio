import { styled } from "../../styles/stitches.config";
import { Flex } from "../../styles/Global";
import { Text } from "../../styles/Text";

export const Project = styled("article", {
  marginTop: "4rem",
  backgroundColor: "$grey2",
  padding: "5px",
  borderRadius: "4px",

  "&:hover": {
    backgroundColor: "$grey1",
  },
});

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$brand4",
  color: "$brand2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey5",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey3",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectCard = styled("article", {
  maxWidth: "100%",
  maxHeight: "350px",
  display: "flex",
  borderRadius: "4px",
  gap: "10px",
  marginBottom: "30px",

  "@mobile": {
    flexDirection: "column",
    maxHeight: "500px",
    alignItems: "center",
  },
});

export const ProjectImage = styled("div", {
  maxWidth: "100%",
  width: "50%",
  maxHeight: "350px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  objectFit: "cover",
  border: "2px solid $grey5",
  borderRadius: "4px",

  img: {
    maxWidth: "100%",
  },
});

export const ProjectContent = styled("div", {
  display: "flex",
  width: "50%",
  flexDirection: "column",
  gap: "20px",
  marginTop: "20px",
  textAlign: "center",

  p: {
    margin: "15px 0",
    color: "$grey5",
  },

  h3: {
    color: "$grey5",
  },
});

export const ProjectAreaButtons = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  marginTop: "30px",

  "@mobile": {
    marginTop: "10px",
  },
});

export const ProjectLinkDeploy = styled("a", {
  fontSize: "1rem",
  color: "$grey1",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",
  width: "100px",
  height: "30px",
  backgroundColor: "$grey5",
  padding: "10px",
  borderRadius: "4px",

  "&:hover": {
    backgroundColor: "$grey3",
  },
});
