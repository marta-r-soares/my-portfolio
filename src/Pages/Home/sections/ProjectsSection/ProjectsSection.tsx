import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));
    

    const projects = [
        {
            title: "Food App",
            subtitle: "Nov 2023 - Fev 2024",
            srcImg: "/src/assets/images/food.png",
            description: "O FoodApp é um aplicativo de entrega de comida que conecta usuários a restaurantes locais, permitindo que eles explorem menus, façam pedidos e recebam suas refeições favoritas na porta de casa. Este projeto tem como objetivo proporcionar uma experiência conveniente e eficiente para os amantes da culinária.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, React Native, Node.js, Express, MongoDB, JWT (JSON Web Token)",
            websiteURL: "https://youtu.be/Ar1w-2F6xoI",
            codeURL: "https://github.com/marta-r-soares/PRR-Front-End",
        },
        {
            title: "Bella semijoias",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/bella semijoias.jpg",
            description: "A Bella semijoias é uma plataforma de e-commerce focada na venda de semijoias para o público feminino. O projeto tem como objetivo proporcionar uma experiência de compra simples, rápida e visualmente atrativa, com funcionalidades essenciais para um comércio eletrônico moderno.",
            technologies: "Technologies: JavaScript, HTML, CSS, Bootstrap icons, Figma",
            websiteURL: "https://youtu.be/k0CCsIjqYi0",
            codeURL: "https://github.com/marta-r-soares/bella-semijoias.git",
        },
 
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
