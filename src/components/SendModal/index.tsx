import { TextField } from "@mui/material";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { toast } from "react-toastify";
import { validateAddress } from "../../utils/addressValidate";
import Input from "../Input";
import * as S from "./styles";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  onSubmit: (receiver: string, value: string) => Promise<unknown>;
}

export const SendModal = ({ onClose, isOpen, onSubmit }: ModalProps) => {
  const [receiver, setReceiver] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (receiver: string, value: string) => {
    if (!validateAddress(receiver)) {
      return setError("Invalid Address");
    }
    toast.promise(onSubmit(receiver, value), {
      pending: "pending...",
      error: "error!!",
    });
    onClose();
  };

  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose} />
      <S.Container isOpen={isOpen}>
        <S.Title>
          Transfer ETH <FaEthereum />
        </S.Title>
        <Input
          placeholder="Insert receiver address..."
          label="Receiver Address"
          onChange={(e) => setReceiver(e.target.value)}
          error={error}
        />
        <TextField
          id="outlined-number"
          label="Amount"
          placeholder="0.0..."
          type="number"
          size="medium"
          onChange={(e) => setValue(e.target.value.toString())}
        />
        <S.Wrapper>
          <S.Button cancel onClick={onClose}>
            Cancel
          </S.Button>
          <S.Button
            onClick={() => handleSubmit(receiver, value)}
            disabled={!receiver}
          >
            Send ETH
          </S.Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
