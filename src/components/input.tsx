import { ComponentProps } from "react";
import { Mail } from "lucide-react"

interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
	return (
		<div className="bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2">
			<span className="text-gray-400">
				<Mail />
			</span>

			<input 
				className="flex-1 outline-0"
				{...props} 
			/>
		</div>
	)
}