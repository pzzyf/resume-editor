import { Button, Dropdown, Menu, Space } from '@arco-design/web-react'
import { IconDown, IconGithub } from '@arco-design/web-react/icon'

const actionList = (
  <Menu>
    <Menu.Item key="1">
      <a href="https://github.com/pzzyf/resume-editor" target="_blank">实时预览</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="https://github.com/pzzyf/resume-editor" target="_blank">JSON编辑</a>
    </Menu.Item>
  </Menu>
)

const Right: React.FC<{ exportPDF: () => void }> = (props) => {
  return (
    <div className="flex items-center">
      <Dropdown droplist={actionList} position="br">
        <Button type="text" className="hover:bg-gray-200">
          操作
          <IconDown />
        </Button>
      </Dropdown>
      <Dropdown
        droplist={(
          <Menu>
            <Menu.Item key="1">
              <div onClick={() => props.exportPDF()}>PDF</div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={() => props.exportPDF()}>JSON</div>
            </Menu.Item>
          </Menu>
        )}
        trigger="click"
        position="br"
      >
        <Button type="text">
          导出
          <IconDown />
        </Button>
      </Dropdown>
      <a className="ml-[5px] mr-[10px] text-[20px]" href="https://github.com/pzzyf/resume-editor" target="_blank"><IconGithub /></a>
    </div>
  )
}

export { Right }
