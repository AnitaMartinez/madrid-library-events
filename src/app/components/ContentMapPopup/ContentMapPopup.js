"use client";

import { Box, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';

const PopupContainer = styled(Box)`
  padding: 12px;
`;

const PopupTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.text.primary};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const PopupSubtitle = styled(Typography)`
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: 0.95rem;
  margin-bottom: 8px;
`;

const PopupText = styled(Typography)`
  font-size: 0.875rem;
  margin-bottom: 8px;
  color: ${(props) => props.theme.palette.text.primary};
`;

const PopupLink = styled(Link)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
};

function ContentMapPopup({ libraryEvent = {} }) {
    console.log("🚀 ~ ContentMapPopup ~ libraryEvent:", libraryEvent)
    const {
        audience, title, bookshop, dates, recurrence, time, link,
    } = libraryEvent;

    const formattedDates = dates && dates.startDate === dates.endDate
        ? formatDate(dates.startDate)
        : `${formatDate(dates.startDate)} - ${formatDate(dates.endDate)}`;

    return (
        <PopupContainer>
            {title && (
                <PopupTitle variant="h5" component="h3">
                    {title}
                </PopupTitle>
            )}
            <PopupSubtitle variant="subtitle1" component="h4">
                {bookshop || 'Evento online'}
            </PopupSubtitle>
            {audience && (
                <PopupText variant="body2">
                    {`Dirigido a ${audience}`}
                </PopupText>
            )}
            {dates && (
                <PopupText variant="body2">
                    {formattedDates}
                </PopupText>
            )}
            {time && (
                <PopupText variant="body2">
                    {time && `${time} horas`}
                </PopupText>
            )}
            {recurrence && (
                <PopupText variant="body2">
                    {`${recurrence.days}. Frecuencia: ${recurrence.frequency}`}
                </PopupText>
            )}
            {link && (
                <PopupLink href={link} target="_blank" rel="noopener noreferrer">
                    Más información
                </PopupLink>
            )}
        </PopupContainer>
    );
}

export default ContentMapPopup;
