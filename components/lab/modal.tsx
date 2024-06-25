"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ModalToggle = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={openModal} size={"sm"} variant={"outline"}>
        Show Modal
      </Button>
      <Modal show={show} closeModal={closeModal} />
    </>
  );
};

const Modal = ({
  show,
  closeModal,
}: {
  show: boolean;
  closeModal: () => void;
}) => {
  return (
    <div
      className={`fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-black/60 p-6 pr-10 transition-all duration-100 ease-in-out ${show ? "opacity-100" : "opacity-0 pointer-events-none delay-500"}`}
    >
      <div
        className={`relative flex w-full max-w-lg flex-col divide-y overflow-hidden rounded-md bg-popover text-popover-foreground transition-all duration-500 ease-in-out ${
          show ? "opacity-100 delay-100" : "opacity-0"
        }`}
      >
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute right-3 top-3 h-8 w-8"
          onClick={closeModal}
        >
          <X size={24} />
        </Button>
        <div className="flex flex-col gap-y-2 px-6 py-4 sm:gap-y-4">
          <h3 className="text-xl font-semibold">Live coding with Salman</h3>
          <div className="mt-2 h-[1px] w-full bg-border" />
          <p className="text-base font-medium">
            Experience a master at work! Put your suit on, grab a chair, and
            join me in a live coding session where I will be building a project
            from scratch.
          </p>
          <div className="mt-2 h-[1px] w-full bg-border" />
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-3 items-end">
              <p className="w-fit text-base font-medium text-muted-foreground">
                Place
              </p>
              <p className="col-span-2 text-base font-medium text-foreground">
                Zoom Meeting
              </p>
            </div>
            <div className="grid grid-cols-3 items-end">
              <p className="w-fit text-base font-medium text-muted-foreground">
                Time
              </p>
              <p className="col-span-2 text-base font-medium text-foreground">
                08:00 PM (GMT+7)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 bg-muted p-3 sm:flex-row sm:gap-6 sm:pl-6">
          <code className="text-center text-xs text-muted-foreground">
            1 invitation left
          </code>
          <div className="flex w-full items-center gap-x-3 sm:w-fit">
            <Button
              onClick={closeModal}
              variant={"destructive"}
              className="w-full sm:w-fit"
            >
              Cancel
            </Button>
            <Button
              onClick={closeModal}
              variant={"default"}
              className="w-full sm:w-fit"
            >
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalToggle };
