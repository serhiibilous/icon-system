import { Icon } from '../icon'

export function Social() {
  return (
    <div className="absolute bottom-0 right-0 p-2">
      <div className="text-right block text-sm font-medium leading-6 text-gray-900">
        My social links
      </div>
      <ul className="mt-2 flex gap-3">
        <li>
          <a href="https://github.com/serhiibilous/icon-system">
            <Icon name="github" size="small" />
          </a>
        </li>
        <li>
          <a href="https://serhiibilous.medium.com/">
            <Icon name="medium" size="small" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/serhii-bilous/">
            <Icon name="linkedin" size="small" />
          </a>
        </li>
      </ul>
    </div>
  )
}
