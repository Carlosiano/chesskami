"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useContext, useState } from "react";

import { SessionContext } from "@/context/session";
import { createGame } from "@/lib/game";

export default function CreateGame() {
  const session = useContext(SessionContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const router = useRouter();

  async function submitCreateGame(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!session?.user?.id) return;
    setButtonLoading(true);

    const target = e.target as HTMLFormElement;
    const unlisted = target.elements.namedItem("createUnlisted") as HTMLInputElement;
    const startingSide = (target.elements.namedItem("createStartingSide") as HTMLSelectElement)
      .value;

    const game = await createGame(startingSide, unlisted.checked);

    if (game) {
      router.push(`/${game.code}`);
    } else {
      setButtonLoading(false);
      // TODO: Show error message
    }
  }

  return (
    <form className="form-control" onSubmit={submitCreateGame}>
      <label className="label cursor-pointer">
        <span className="label-text">tidak terdaftar/khusus undangan</span>
        <input type="checkbox" className="checkbox" name="createUnlisted" id="createUnlisted" />
      </label>
      <label className="label" htmlFor="createStartingSide">
        <span className="label-text">Pilih sisi Anda</span>
      </label>
      <div className="input-group">
        <select
          className="select select-bordered"
          name="createStartingSide"
          id="createStartingSide"
        >
          <option value="random">Acak</option>
          <option value="white">Putih</option>
          <option value="black">Hitam</option>
        </select>
        <button
          className={
            "btn" +
            (buttonLoading ? " loading" : "") +
            (!session?.user?.id ? " btn-disabled text-base-content" : "")
          }
          type="submit"
        >
          Buat
        </button>
      </div>
    </form>
  );
}