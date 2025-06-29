import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    gradient?: readonly [string, string];
    href?: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    gradient,
    href,
}: ProjectCardProps) {
    const media = image ? (
        <CardMedia
            component="img"
            height="160"
            image={image}
            alt={title}
            loading="lazy"
        />
    ) : gradient ? (
        <Box
            sx={{
                height: 160,
                background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
            }}
        />
    ) : (
        <Box sx={{ height: 160, background: 'transparent' }} />
    );

    const card = (
        <Card
            elevation={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 2,
                backgroundColor: '#181818',
                transition: 'box-shadow .2s',
                '&:hover': { boxShadow: 6 },
            }}
        >
            {media}
            <CardContent sx={{ px: 3, py: 2, flex: 1 }}>
                <Typography
                    gutterBottom
                    className="card-title"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 700,
                        fontFamily: 'Montserrat, Arial, sans-serif',
                        fontSize: '1.1rem',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    className="card-body"
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.6,
                        fontFamily: 'Lato, Arial, sans-serif',
                        fontSize: '1rem',
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );

    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
        >
            {card}
        </a>
    ) : (
        card
    );
}