// import { PencilLineIcon, UploadIcon, Trash2Icon } from 'lucide-react'

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuSeparator,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu'
// import { Button } from './ui/button'

// export default function  Header(){
//   return (
//     <div className='flex justify-end w-full' >
//         <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant='outline'>Align Start</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align='start' className='w-34'>
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <PencilLineIcon />
//             Edit
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <UploadIcon />
//             Share
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem variant='destructive'>
//             <Trash2Icon />
//             <span>Delete</span>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//     </div>
//   )
// }

import { PencilLineIcon, UploadIcon, Trash2Icon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from './ui/button'

export default function Header() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-end">
      {/* -------- Right: Your Dropdown (UNCHANGED CODE) -------- */}
      <div >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button >Button</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align='start' className='w-34'>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <PencilLineIcon />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem>
                <UploadIcon />
                Share
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem variant='destructive'>
                <Trash2Icon />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </nav>
  )
}

