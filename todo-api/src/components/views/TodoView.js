import { Heading } from "../Heading";
import { TodoCard } from "../TodoCard";
import { TodoForm } from "../TodoForm";
import { AddNewTodo } from "../AddNewTodo";

import { useList } from "../hooks/useList";
import { useModal } from "../hooks/useModal";
import { TodoModal } from "../TodoModal";
import { useEffect, useState } from "react";

import { TodoSkeleton } from "../TodoSkeleton";
import { Fragment } from "react";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const TodoView = ({ onLogaut }) => {
  const { list, reloadData, loading, error: loadingError } = useList();
  const { open, onOpen, onClose } = useModal();
  const [editData, setEditData] = useState(null);

  const [listErrors, setListErrors] = useState([]);

  const addListError = (errorMessage) => {
    setListErrors((currentListErrors) => [...currentListErrors, errorMessage]);
  };

  useEffect(() => {
    if (!listErrors.length) {
      return;
    }
    const clearFirstError = () => {
      setListErrors((currentListErrors) => currentListErrors.slice(1));
    };
    setTimeout(clearFirstError, 10 * 1000);
  }, [listErrors]);

  return (
    <>
      <Heading title="Todo list" />
      <Button variant="text" size="sm" onClick={onLogaut}>
        Logout
      </Button>
      <AddNewTodo onOpen={onOpen} />

      <TodoModal
        open={open}
        onClose={() => {
          onClose();
          setEditData(null);
        }}
      >
        <TodoForm
          onClose={() => {
            onClose();
            reloadData();
            setEditData(null);
          }}
          editData={editData}
        />
      </TodoModal>

      {loadingError && (
        <Box marginBottom={2}>
          <Alert severity="error">{loadingError}</Alert>
        </Box>
      )}

      {listErrors.length > 0 &&
        listErrors.map((errorMessage, i) => (
          <Box marginBottom={2} key={errorMessage + i}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        ))}

      {loading ? (
        <Fragment>
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
        </Fragment>
      ) : (
        list.map((item) => (
          <TodoCard
            key={item._id}
            id={item._id}
            title={item.title}
            completed={item.completed}
            description={item.description}
            onReload={reloadData}
            onEdit={() => {
              onOpen();
              setEditData(item);
            }}
            onError={addListError}
          />
        ))
      )}
    </>
  );
};

export default TodoView;
