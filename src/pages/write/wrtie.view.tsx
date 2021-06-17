import { Button, Col, Form, Input, Row } from 'antd'
import { Controller, useForm } from 'react-hook-form'

const { TextArea } = Input

function WritingPageView() {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="제목"
              labelCol={{ span: 24 }}
              style={{ fontWeight: 'bold' }}
              name="title"
              rules={[
                {
                  required: true,
                  message: '제목은 필수로 입력해야합니다.'
                }
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        ></Controller>
      </div>
      <div style={{ marginTop: 10 }}>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="내용"
              labelCol={{ span: 24 }}
              style={{ fontWeight: 'bold' }}
              name="content"
              rules={[
                {
                  required: true,
                  message: '내용은 필수로 입력해야합니다.'
                }
              ]}
            >
              <TextArea autoSize={{ minRows: 30 }} {...field} />
            </Form.Item>
          )}
        ></Controller>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">
          제출
        </Button>
      </div>
    </Form>
  )
}
export default WritingPageView
