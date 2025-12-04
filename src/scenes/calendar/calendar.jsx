import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Por favor, insira um novo título para o seu evento.");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Tem certeza de que deseja excluir o evento? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const toISODate = (dateStr) => {
    const [day, month, year] = dateStr.split(/[-/]/);
    const dd = day.padStart(2, "0");
    const mm = month.padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };


  return (
    <Box m="20px">
      <Header title="Calendário" subtitle="Agenda de compromissos" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDARIO BARRA LATERAL */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Eventos</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {new Intl.DateTimeFormat("pt-BR", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }).format(new Date(event.start))}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDARIO */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            locale={ptBrLocale}
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "Evento o dia todo",
                date: toISODate("14-09-2022"),
              },
              {
                id: "5123",
                title: "Evento cronometrado",
                date: toISODate("28/09/2022"),
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;