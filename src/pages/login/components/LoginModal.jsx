import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function LoginModal({ form, isOpen, onClose }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="6px" />
      <ModalContent bgColor="#1a1a1a">
        <ModalHeader>
          <Text color="whiteAlpha.800">Zaloguj się</Text>
        </ModalHeader>
        <ModalCloseButton aria-label="modal-close" color="whiteAlpha.800" />
        <ModalBody>{form}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
